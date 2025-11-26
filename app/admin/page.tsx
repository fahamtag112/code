import { getCurrentUser } from '../../lib/getCurrentUser';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user) redirect('/login');
  if (user.role !== 'admin') return <div className="min-h-screen flex items-center justify-center">403 — Forbidden. You are not an admin.</div>;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/6">
        <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
        <p className="text-slate-300 mt-2">This area is only visible to admin users.</p>

        <div className="mt-6 text-sm text-slate-300">Logged in as: <strong className="text-white">{user.email}</strong></div>

        <section className="mt-6">
          <h2 className="text-lg text-white font-semibold">Admin actions</h2>
          <ul className="mt-3 list-disc list-inside text-slate-300">
            <li>View all users (future)</li>
            <li>Manage settings (future)</li>
            <li>Run maintenance tasks (future)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
