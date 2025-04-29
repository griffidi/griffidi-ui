import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import type { Context } from '../client/context.ts';
import { accessTokenSecret } from '../config.ts';
import { compareHash } from '../crypto/hash.ts';

type SignInArgs = {
  username: string;
  password: string;
};

const resolvers = {
  Query: {
    async signin(
      _: unknown,
      { username, password }: SignInArgs,
      { prisma }: Context,
    ) {
      const user = await prisma.user.findFirst({
        where: {
          email: username,
        },
        select: {
          password: true,
        },
      });

      if (!user) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      // validate password against stored hash
      const hashPassword = user.password;
      const isValid = compareHash(password, hashPassword);

      if (isValid) {
        // credentials are valid, so return a JWT
        const token = jwt.sign({ username }, accessTokenSecret, {
          expiresIn: '1h',
        });
        return token;
      }

      return null;
    },
  },
};

export default resolvers;
