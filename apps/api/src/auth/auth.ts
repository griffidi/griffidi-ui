import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import type { PrismaClient } from '#app/prisma/client/index.js';
import { accessTokenSecret } from '../config.ts';
import { compareHash } from '../crypto/hash.ts';

export type SignInArgs = {
  username: string;
  password: string;
};

export const signin = async (
  { username, password }: SignInArgs,
  prisma: PrismaClient,
) => {
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
  const isValid = password === hashPassword;
  // const isValid = compareHash(password, hashPassword);

  if (isValid) {
    // credentials are valid, so return a JWT
    const token = jwt.sign({ username }, accessTokenSecret, {
      expiresIn: '1h',
    });
    return token;
  }

  return null;
};
