import type { PrismaClient } from '#app/prisma/client/index.js';
import { faker } from './faker-context.ts';

export const createCustomerContacts = async (prisma: PrismaClient) => {
  console.group('Seeding customer contacts');

  const customers = await prisma.customer.findMany({
    select: {
      id: true,
    },
  });

  if (customers.length === 0) {
    console.warn('No customers found. Skipping customer contact seeding.');
    return;
  }

  const customerIds = customers.map(customer => customer.id);

  for (let i = 0, len = customerIds.length; i < len; i++) {
    const customerId = customerIds[i];

    const createCustomerContact = () =>
      prisma.customerContact.create({
        data: {
          id: faker.string.uuid(),
          customerId,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
        },
      });

    console.log('Adding customer contacts for customerId:', customerId);
    Array.from({ length: 10 }).forEach(
      async () => await createCustomerContact(),
    );
  }

  console.groupEnd();
};
