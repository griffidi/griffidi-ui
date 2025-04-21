import { PrismaClient } from '@/prisma/client/index.js';
import { createCustomers } from './customer.ts';
import { createCustomerContacts } from './customer-contact.ts';
import { createUsers } from './user.ts';

const prisma = new PrismaClient();

const load = async () => {
  await createUsers(prisma);
  await createCustomers(prisma);
  await createCustomerContacts(prisma);
};

load()
  .then(() => console.log('Seed completed'))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    // Disconnecting needs to wait at least 1 second to ensure all
    // operations are completed.
    setTimeout(async () => {
      await prisma.$disconnect();
    }, 1000);
  });
