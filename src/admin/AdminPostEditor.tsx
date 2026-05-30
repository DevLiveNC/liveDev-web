import { useEffect, useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, Upload } from 'lucide-react';
import type { BlogPost } from '../data/blogPosts';
import { fetchPostBySlug, savePost, slugify, uploadCoverImage } from '../lib/blogApi';

interface AdminPostEditorProps {
  editSlug?: string;
}

const GRADIENTS = [
  'from-sky-500 to-blue-600',
  'from-indigo-500 to-sky-500',
  'from-blue-500 to-indigo-600',
  'from-cyan-500 to-blue-600',
  'from-green-500 to-emerald-500',
];

const emptyPost = (): BlogPost & { published: boolean } => ({
  slug: '',
  title: '',
  excerpt: '',
  date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
  readTime: '5 dk',
  category: 'Deneyim',
  gradient: GRADIENTS[0],
  coverImage: '/blog/script-cover.jpg',
  content: [{ paragraphs: [''] }],
  published: true,
});

const AdminPostEditor = ({ editSlug }: AdminPostEditorProps) => {
  const [post, setPost] = useState(emptyPost());
  const [loading, setLoading] = useState(Boolean(editSlug));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!editSlug) return;

    setLoading(true);
    fetchPostBySlug(editSlug, true)
      .then((data) => {
        if (data) {
          setPost({ ...data, published: (data as BlogPost & { published?: boolean }).published ?? true });
        }
      })
      .finally(() => setLoading(false));
  }, [editSlug]);

  const updateField = <K extends keyof typeof post>(key: K, value: (typeof post)[K]) => {
    setPost((prev) => ({ ...prev, [key]: value }));
  };

  const handleTitleChange = (title: string) => {
    setPost((prev) => ({
      ...prev,
      title,
      slug: editSlug ? prev.slug : slugify(title),
    }));
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');
    try {
      const url = await uploadCoverImage(file);
      updateField('coverImage', url);
    } catch {
      setError('Görsel yüklenemedi.');
    } finally {
      setUploading(false);
    }
  };

  const addSection = () => {
    updateField('content', [...post.content, { paragraphs: [''] }]);
  };

  const removeSection = (index: number) => {
    updateField(
      'content',
      post.content.filter((_, i) => i !== index)
    );
  };

  const updateSection = (index: number, field: 'heading' | 'paragraphs', value: string) => {
    const updated = [...post.content];
    if (field === 'heading') {
      updated[index] = { ...updated[index], heading: value || undefined };
    } else {
      updated[index] = { ...updated[index], paragraphs: value.split('\n').filter(Boolean) };
    }
    updateField('content', updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!post.slug.trim() || !post.title.trim()) {
      setError('Başlık ve slug zorunludur.');
      return;
    }

    setSaving(true);
    try {
      await savePost(post);
      window.location.hash = '#admin';
    } catch {
      setError('Kaydetme başarısız. Oturumunuz açık mı kontrol edin.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-slate-100 pb-20">
      <header className="glass-nav sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#admin" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Geri
          </a>
          <h1 className="text-lg font-bold text-white">{editSlug ? 'Yazıyı Düzenle' : 'Yeni Yazı'}</h1>
          <div className="w-16" />
        </div>
      </header>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {error && <p className="text-red-400 text-sm glass-card rounded-lg p-4">{error}</p>}

        <div className="glass-card rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-subtle text-sm mb-2">Başlık *</label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="input-glass w-full px-4 py-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-subtle text-sm mb-2">Slug (URL) *</label>
            <input
              type="text"
              value={post.slug}
              onChange={(e) => updateField('slug', slugify(e.target.value))}
              required
              className="input-glass w-full px-4 py-3 rounded-lg font-mono text-sm"
            />
            <p className="text-faint text-xs mt-1">#yazi/{post.slug || '...'}</p>
          </div>

          <div>
            <label className="block text-subtle text-sm mb-2">Kısa Özet *</label>
            <textarea
              value={post.excerpt}
              onChange={(e) => updateField('excerpt', e.target.value)}
              required
              rows={3}
              className="input-glass w-full px-4 py-3 rounded-lg resize-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-subtle text-sm mb-2">Kategori</label>
              <input
                type="text"
                value={post.category}
                onChange={(e) => updateField('category', e.target.value)}
                className="input-glass w-full px-4 py-3 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-subtle text-sm mb-2">Okuma Süresi</label>
              <input
                type="text"
                value={post.readTime}
                onChange={(e) => updateField('readTime', e.target.value)}
                className="input-glass w-full px-4 py-3 rounded-lg"
                placeholder="5 dk"
              />
            </div>
          </div>

          <div>
            <label className="block text-subtle text-sm mb-2">Gradient</label>
            <select
              value={post.gradient}
              onChange={(e) => updateField('gradient', e.target.value)}
              className="input-glass w-full px-4 py-3 rounded-lg"
            >
              {GRADIENTS.map((g) => (
                <option key={g} value={g} className="bg-ink-card">
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-subtle text-sm mb-2">Kapak Görseli</label>
            {post.coverImage && (
              <img src={post.coverImage} alt="" className="w-full h-40 object-cover rounded-lg mb-3" />
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="btn-glass inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg cursor-pointer">
                <Upload className="w-4 h-4" />
                {uploading ? 'Yükleniyor...' : 'Görsel Yükle'}
                <input type="file" accept="image/*" onChange={handleCoverUpload} className="hidden" disabled={uploading} />
              </label>
              <input
                type="url"
                value={post.coverImage}
                onChange={(e) => updateField('coverImage', e.target.value)}
                className="input-glass flex-1 px-4 py-3 rounded-lg text-sm"
                placeholder="veya URL yapıştır"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={post.published}
              onChange={(e) => updateField('published', e.target.checked)}
              className="w-4 h-4 accent-sky-500"
            />
            <span className="text-subtle text-sm">Yayında (işaretli değilse taslak)</span>
          </label>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold">İçerik Bölümleri</h2>
            <button type="button" onClick={addSection} className="btn-glass inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm">
              <Plus className="w-4 h-4" />
              Bölüm Ekle
            </button>
          </div>

          {post.content.map((section, index) => (
            <div key={index} className="glass-card rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-faint text-sm">Bölüm {index + 1}</span>
                {post.content.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(index)}
                    className="text-red-400 hover:text-red-300 p-1"
                    aria-label="Bölümü sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <input
                type="text"
                value={section.heading ?? ''}
                onChange={(e) => updateSection(index, 'heading', e.target.value)}
                placeholder="Bölüm başlığı (opsiyonel)"
                className="input-glass w-full px-4 py-2 rounded-lg text-sm"
              />
              <textarea
                value={section.paragraphs.join('\n')}
                onChange={(e) => updateSection(index, 'paragraphs', e.target.value)}
                rows={5}
                placeholder="Her paragraf yeni satırda"
                className="input-glass w-full px-4 py-3 rounded-lg resize-none text-sm"
              />
            </div>
          ))}
        </div>

        <button type="submit" disabled={saving} className="btn-brand w-full py-4 inline-flex items-center justify-center gap-2 disabled:opacity-50">
          <Save className="w-5 h-5" />
          {saving ? 'Kaydediliyor...' : 'Kaydet'}
        </button>
      </form>
    </div>
  );
};

export default AdminPostEditor;
