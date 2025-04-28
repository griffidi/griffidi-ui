import type { PrismaClient } from '#app/prisma/client/index.js';
import { faker } from './faker-context.ts';

export const createCustomers = async (prisma: PrismaClient) => {
  console.group('Seeding customers');

  const createCustomer = () =>
    prisma.customer.create({
      data: {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: faker.lorem.words(5),
        phone: faker.phone.number(),
      },
    });

  console.log('Adding customers...');
  Array.from({ length: 10 }).forEach(async () => await createCustomer());

  console.groupEnd();
};
