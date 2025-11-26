import { getCurrentUser } from '../../lib/getCurrentUser';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) redirect('/login');

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/6">
        <h1 className="text-2xl font-semibold text-white">Welcome back, {user.email}</h1>
        <p className="text-slate-300 mt-2">This is your user dashboard — nothing admin about it.</p>

        <div className="mt-6 text-sm text-slate-300">Your role: <strong className="text-white">{user.role ?? 'user'}</strong></div>
      </div>
    </div>
  );
}
