import {
  index,
  prefix,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/Home.tsx'),
  ...prefix('customers', [
    index('routes/customers/Customers.tsx'),
    route('id', 'routes/customers/Customer.tsx'),
  ]),
] satisfies RouteConfig;
