import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { getAdminSession } from '../lib/blogApi';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminPostEditor from './AdminPostEditor';
import type { Session } from '@supabase/supabase-js';

interface AdminAppProps {
  path: string;
}

const AdminApp = ({ path }: AdminAppProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setChecking(false);
      return;
    }

    getAdminSession().then((s) => {
      setSession(s);
      setChecking(false);
    });

    const { data: listener } = supabase!.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-ink text-slate-100 flex items-center justify-center p-6">
        <div className="glass-card max-w-lg rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Admin Panel Yapılandırılmamış</h1>
          <p className="text-muted mb-6">
            Vercel ortam değişkenlerine <code className="text-sky-400">VITE_SUPABASE_URL</code> ve{' '}
            <code className="text-sky-400">VITE_SUPABASE_ANON_KEY</code> ekleyin. Supabase kurulana kadar site
            statik yazılarla çalışmaya devam eder.
          </p>
          <a href="#home" className="btn-brand inline-flex px-6 py-3">
            Siteye Dön
          </a>
        </div>
      </div>
    );
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onSuccess={() => getAdminSession().then(setSession)} />;
  }

  if (path === 'yeni' || path.startsWith('duzenle/')) {
    const editSlug = path.startsWith('duzenle/') ? path.replace('duzenle/', '') : undefined;
    return <AdminPostEditor editSlug={editSlug} />;
  }

  return <AdminDashboard />;
};

export default AdminApp;
