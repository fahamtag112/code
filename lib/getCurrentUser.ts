import { cookies } from 'next/headers';
import { verifyToken } from './auth';
import { prisma } from './prisma';

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) return null;

    const payload = verifyToken(token);
    if (!payload) return null;

    const sub = payload.sub;
    const id = typeof sub === 'string' || typeof sub === 'number' ? Number(sub) : NaN;
    if (Number.isNaN(id)) return null;

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return null;

    return { id: user.id, email: user.email, role: user.role };
  } catch {
    return null;
  }
}
