-- LiveDev Admin Panel — Supabase kurulumu
-- Supabase Dashboard > SQL Editor içinde çalıştırın

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  date text not null,
  read_time text not null default '5 dk',
  category text not null default 'Genel',
  gradient text not null default 'from-sky-500 to-blue-600',
  cover_image text not null,
  content jsonb not null default '[]',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table posts enable row level security;

-- Herkes yayındaki yazıları okuyabilir
create policy "public_read_published"
  on posts for select
  using (published = true);

-- Giriş yapmış admin tüm işlemleri yapabilir
create policy "admin_all"
  on posts for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Kapak görseli bucket
insert into storage.buckets (id, name, public)
values ('blog-covers', 'blog-covers', true)
on conflict (id) do nothing;

create policy "public_read_covers"
  on storage.objects for select
  using (bucket_id = 'blog-covers');

create policy "admin_upload_covers"
  on storage.objects for insert
  with check (bucket_id = 'blog-covers' and auth.role() = 'authenticated');

create policy "admin_delete_covers"
  on storage.objects for delete
  using (bucket_id = 'blog-covers' and auth.role() = 'authenticated');
