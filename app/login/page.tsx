"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      // success -> redirect based on role
      const role = data?.user?.role as string | undefined;
      if (role === 'admin') router.push('/admin');
      else router.push('/dashboard');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#0f172a] via-[#071025] to-[#071026]">
      <div className="max-w-md w-full rounded-2xl bg-gradient-to-b from-[#0f172a] via-[#071025] to-[#071026] p-8 border border-white/6">
        <h2 className="text-xl font-semibold text-white mb-4">Sign in</h2>

        <form onSubmit={submit} className="flex flex-col gap-3">
          <label className="text-sm text-slate-300">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="rounded-md px-3 py-2 bg-white/[.12]" />

          <label className="text-sm text-slate-300">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} required type="password" className="rounded-md px-3 py-2 bg-white/[.12]" />

          {error && <div className="text-sm text-rose-400">{error}</div>}

          <button disabled={loading} type="submit" className="mt-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] px-4 py-2 font-semibold">
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-400">New here? <a className="underline" href="/register">Create an account</a></div>
      </div>
    </div>
  );
}
