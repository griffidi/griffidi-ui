import type { PrismaClient } from '#app/prisma/client/index.js';
import { faker } from './faker-context.ts';

export const createCustomers = async (prisma: PrismaClient) => {
  console.group('Seeding customers');

  const createCustomer = () =>
    prisma.customer.create({
      data: {
        id: faker.string.uuid(),
        name: faker.company.name(),
        streetAddress: faker.location.streetAddress(),
        streetAddress2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        zip: faker.location.zipCode(),
        phone: faker.phone.number(),
      },
    });

  console.log('Adding customers...');
  Array.from({ length: 120 }).forEach(async () => await createCustomer());

  console.groupEnd();
};
