import type { BlogPost } from '../data/blogPosts';
import { blogPosts as staticPosts } from '../data/blogPosts';
import { isSupabaseConfigured, supabase } from './supabase';

export interface BlogPostInput extends BlogPost {
  published?: boolean;
}

interface DbPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  gradient: string;
  cover_image: string;
  content: BlogPost['content'];
  published: boolean;
}

const mapDbToPost = (row: DbPost): BlogPost & { published: boolean } => ({
  slug: row.slug,
  title: row.title,
  excerpt: row.excerpt,
  date: row.date,
  readTime: row.read_time,
  category: row.category,
  gradient: row.gradient,
  coverImage: row.cover_image,
  content: row.content,
  published: row.published,
});

const mapPostToDb = (post: BlogPostInput) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  read_time: post.readTime,
  category: post.category,
  gradient: post.gradient,
  cover_image: post.coverImage,
  content: post.content,
  published: post.published ?? true,
  updated_at: new Date().toISOString(),
});

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export async function fetchPublishedPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured || !supabase) return staticPosts;

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) return staticPosts;

  const fromDb = data.map((row) => mapDbToPost(row as DbPost));
  if (fromDb.length === 0) return staticPosts;

  const dbSlugs = new Set(fromDb.map((p) => p.slug));
  const staticOnly = staticPosts.filter((p) => !dbSlugs.has(p.slug));
  return [...fromDb, ...staticOnly];
}

export async function fetchAllPostsAdmin(): Promise<(BlogPost & { published: boolean })[]> {
  if (!supabase) return staticPosts.map((p) => ({ ...p, published: true }));

  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []).map((row) => mapDbToPost(row as DbPost));
}

export async function fetchPostBySlug(slug: string, admin = false): Promise<(BlogPost & { published?: boolean }) | null> {
  if (!isSupabaseConfigured || !supabase) {
    return staticPosts.find((p) => p.slug === slug) ?? null;
  }

  let query = supabase.from('posts').select('*').eq('slug', slug);

  if (!admin) {
    query = query.eq('published', true);
  }

  const { data, error } = await query.maybeSingle();

  if (error) throw error;
  if (data) return mapDbToPost(data as DbPost);

  return staticPosts.find((p) => p.slug === slug) ?? null;
}

export async function savePost(post: BlogPostInput): Promise<void> {
  if (!supabase) throw new Error('Supabase yapılandırılmamış');

  const { error } = await supabase.from('posts').upsert(mapPostToDb(post), { onConflict: 'slug' });

  if (error) throw error;
}

export async function deletePost(slug: string): Promise<void> {
  if (!supabase) throw new Error('Supabase yapılandırılmamış');

  const { error } = await supabase.from('posts').delete().eq('slug', slug);

  if (error) throw error;
}

export async function uploadCoverImage(file: File): Promise<string> {
  if (!supabase) throw new Error('Supabase yapılandırılmamış');

  const ext = file.name.split('.').pop() ?? 'jpg';
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage.from('blog-covers').upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from('blog-covers').getPublicUrl(path);
  return data.publicUrl;
}

export async function signInAdmin(email: string, password: string) {
  if (!supabase) throw new Error('Supabase yapılandırılmamış');
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

export async function signOutAdmin() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function getAdminSession() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}
