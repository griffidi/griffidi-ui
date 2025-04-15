import { index, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  index('routes/auth/login.tsx'),
] satisfies RouteConfig;
