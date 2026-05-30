import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, LogOut, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { deletePost, fetchAllPostsAdmin, signOutAdmin } from '../lib/blogApi';
import type { BlogPost } from '../data/blogPosts';

const AdminDashboard = () => {
  const [posts, setPosts] = useState<(BlogPost & { published?: boolean })[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchAllPostsAdmin();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;

    setDeleting(slug);
    try {
      await deletePost(slug);
      await loadPosts();
    } catch {
      alert('Silme işlemi başarısız.');
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = async () => {
    await signOutAdmin();
    window.location.hash = '#admin';
  };

  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <header className="glass-nav sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#home" className="text-muted hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <h1 className="text-lg font-bold text-white">Yazı Yönetimi</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="#admin/yeni" className="btn-brand inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Plus className="w-4 h-4" />
              Yeni Yazı
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="icon-box-glass p-2 rounded-lg text-muted hover:text-white transition-colors"
              aria-label="Çıkış yap"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <p className="text-muted mb-6">Henüz veritabanında yazı yok. İlk yazınızı ekleyin.</p>
            <a href="#admin/yeni" className="btn-brand inline-flex items-center gap-2 px-6 py-3">
              <Plus className="w-4 h-4" />
              Yeni Yazı Ekle
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.slug} className="glass-card rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <img
                  src={post.coverImage}
                  alt=""
                  className="w-full sm:w-24 h-20 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-white font-semibold truncate">{post.title}</h2>
                    {post.published === false ? (
                      <span className="tag-glass px-2 py-0.5 text-xs flex items-center gap-1 shrink-0">
                        <EyeOff className="w-3 h-3" /> Taslak
                      </span>
                    ) : (
                      <span className="tag-glass px-2 py-0.5 text-xs flex items-center gap-1 shrink-0 text-green-400">
                        <Eye className="w-3 h-3" /> Yayında
                      </span>
                    )}
                  </div>
                  <p className="text-faint text-sm">{post.date} · {post.category}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={`#yazi/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass px-3 py-2 rounded-lg text-sm"
                  >
                    Görüntüle
                  </a>
                  <a
                    href={`#admin/duzenle/${post.slug}`}
                    className="icon-box-glass p-2 rounded-lg text-sky-400 hover:text-sky-300"
                    aria-label="Düzenle"
                  >
                    <Pencil className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleDelete(post.slug)}
                    disabled={deleting === post.slug}
                    className="icon-box-glass p-2 rounded-lg text-red-400 hover:text-red-300 disabled:opacity-50"
                    aria-label="Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
