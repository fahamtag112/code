const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

try{ require('dotenv').config(); }catch(e){/* dotenv optional in this environment */}

const prisma = new PrismaClient();

async function main(){
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if(!adminEmail || !adminPassword){
    console.error('ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required');
    process.exit(1);
  }

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  const hashed = await bcrypt.hash(adminPassword, 10);

  if(existing){
    const updated = await prisma.user.update({ where: { email: adminEmail }, data: { password: hashed, role: 'admin' } });
    console.log('Updated existing user to admin:', { id: updated.id, email: updated.email });
  } else {
    const created = await prisma.user.create({ data: { email: adminEmail, password: hashed, role: 'admin' } });
    console.log('Created admin user:', { id: created.id, email: created.email });
  }
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect());
