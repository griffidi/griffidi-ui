/**
 * This is required at the top level because it is used by `type-graphql` and the generated resolvers.
 *
 * @link https://typegraphql.com/docs/installation.html
 */
import 'reflect-metadata';

import http from 'node:http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginUsageReportingDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { koaMiddleware } from '@as-integrations/koa';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { type SignInArgs, signin } from './auth/auth.ts';
import type { Context } from './client/context.ts';
import { prisma } from './client/index.ts';
import { corsOrigin, isDev, port } from './config.ts';
import resolvers from './resolvers/auth.ts';

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

// const bootstrap = async () => {
const app = new Koa();
const httpServer = http.createServer(app.callback());
const server = new ApolloServer<Context>({
  cache: new InMemoryLRUCache(),
  schema,
  introspection: isDev,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginUsageReportingDisabled(),
  ],
  formatError(formattedError, error) {
    console.error(error);

    return formattedError;
  },
});

await server.start();

app.use(
  cors({
    allowMethods: ['POST', 'OPTIONS'],
    origin: corsOrigin,
  }),
);
app.use(bodyParser());

app.use(
  // @ts-ignore
  koaMiddleware<Context>(server, {
    context: async ({ ctx }) => {
      const { url } = ctx.request;

      if (url === '/api/signin') {
        const token = await signin(ctx.request.body as SignInArgs, prisma);
        ctx.body = { token };
        ctx.status = 200;
      }

      // @ts-ignore
      const token = ctx.headers.authorization;
      await prisma.$connect();

      return { prisma };
    },
  }),
);

await new Promise<void>(resolve => httpServer.listen({ port }, resolve));

export const viteNodeApp = app;
