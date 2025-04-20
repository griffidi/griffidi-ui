import {
  index,
  prefix,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('customers', [
    index('routes/customers/index.tsx'),
    route('id', 'routes/customers/[id].tsx'),
  ]),
] satisfies RouteConfig;
