import { PrismaClient } from '@prisma/client';

// Work with the Node global in a type-safe way to avoid creating multiple
// Prisma clients in dev mode when modules are reloaded.
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
