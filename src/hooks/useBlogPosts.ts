import { useCallback, useEffect, useState } from 'react';
import type { BlogPost } from '../data/blogPosts';
import { blogPosts as staticPosts } from '../data/blogPosts';
import { fetchPostBySlug, fetchPublishedPosts } from '../lib/blogApi';
import { isSupabaseConfigured } from '../lib/supabase';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(staticPosts);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  const refresh = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setPosts(staticPosts);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const data = await fetchPublishedPosts();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { posts, loading, refresh, isLive: isSupabaseConfigured };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchPostBySlug(slug);
        if (active) setPost(data);
      } catch {
        if (active) setPost(staticPosts.find((p) => p.slug === slug) ?? null);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, [slug]);

  return { post, loading };
}
