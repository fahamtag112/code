import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { hashPassword, createToken } from '../../../../lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, adminCode } = body || {};
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    // check existing
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: 'User already exists' }, { status: 409 });

    const hashed = await hashPassword(password);
    // allow creating admin accounts when a correct ADMIN_SECRET is provided
    const isAdmin = typeof process.env.ADMIN_SECRET === 'string' && adminCode === process.env.ADMIN_SECRET;
    const user = await prisma.user.create({ data: { email, password: hashed, role: isAdmin ? 'admin' : 'user' } });

    // sign token
    const token = createToken({ sub: user.id, email: user.email, role: user.role });

    const res = NextResponse.json({ user: { id: user.id, email: user.email, role: user.role } });
    // set cookie
    res.cookies.set({ name: 'token', value: token, httpOnly: true, path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 * 7 });

    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
