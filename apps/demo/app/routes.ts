import {
  index,
  prefix,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('customers', [
    index('routes/customers/customers.tsx'),
    route('id', 'routes/customers/customer.tsx'),
  ]),
] satisfies RouteConfig;
