import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { verifyToken } from '../../../../lib/auth';

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    // safer cookie parsing
    const token = cookieHeader.split(';').map(c => c.trim()).find(c => c.startsWith('token='))?.split('=')[1];

    if (!token) return NextResponse.json({ user: null });

    const payload = verifyToken(token);
    if (!payload) return NextResponse.json({ user: null });

    const sub = payload.sub;
    if (typeof sub !== 'string' && typeof sub !== 'number') return NextResponse.json({ user: null });

    const id = Number(sub);
    if (Number.isNaN(id)) return NextResponse.json({ user: null });

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return NextResponse.json({ user: null });

    return NextResponse.json({ user: { id: user.id, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ user: null });
  }
}
