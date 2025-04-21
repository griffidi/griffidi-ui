// import { Args, ArgsType, Ctx, Field, Query, Resolver } from 'type-graphql';
// import type { Context } from '@/client/context.js';
// import { prisma } from '@/client/index.js';
// // import { NotFoundError, UnauthorizedError } from '@mui/graphql';
// import { UnauthorizedError } from '../errors.js';

// const TOKEN_MAX_AGE = 7 * 86400;

// /**
//  * Get userId and password by userName.
//  *
//  * @param userName The user name to get the user by.
//  * @returns {Promise<{id: string, password: string}>} The user id and password.
//  */
// const getUserIdAndPassword = (userName: string) =>
//   prisma.user.findUniqueOrThrow({
//     where: {
//       email: userName,
//     },
//     select: {
//       id: true,
//       password: true,
//     },
//   });

// /**
//  * Create login history.
//  *
//  * @param userId The user id to create the login history for.
//  * @returns {Promise<void>} A promise that resolves when the login history is created.
//  */
// const createLoginHistory = (userId: string) =>
//   prisma.loginHistory.create({
//     data: {
//       userId,
//     },
//   });

// /**
//  * Sign in arguments.
//  *
//  * @property {string} userName - The username of the user to validate the password against.
//  * @property {string} password - The password to validate.
//  */
// @ArgsType()
// export class SignInArgs {
//   @Field(() => String, { simple: true })
//   userName: string;

//   @Field(() => String, { simple: true })
//   password: string;
// }

// /**
//  * Validate arguments.
//  *
//  * @property {string} token - The access token to validate.
//  */
// @ArgsType()
// export class ValidateArgs {
//   @Field(() => String, { simple: true })
//   token: string;
// }

// @Resolver()
// export class AuthResolver {
//   /**
//    * Validate user credentials and return a JWT if valid.
//    *
//    * @param {SignInArgs} - Credentials to validate.
//    * @param {Context} - Context object.
//    * @returns {Promise<string>} Access token if valid, null if invalid.
//    */
//   @Query(() => String)
//   async signIn(
//     @Args(() => SignInArgs) { userName, password }: SignInArgs,
//     @Ctx() { cookie: { auth }, jwt }: Context,
//   ) {
//     const { id: userId, password: storedPassword } = await getUserIdAndPassword(userName);

//     // Valiate password.
//     const isValid = Bun.password.verifySync(password, storedPassword);
//     if (!isValid) {
//       UnauthorizedError();
//     }

//     // Sign user in.
//     auth.set({
//       value: await jwt.sign({ sub: userId }),
//       httpOnly: true,
//       maxAge: TOKEN_MAX_AGE,
//       path: '/profile',
//     });
//     const { value: token } = auth;

//     await createLoginHistory(userId);

//     return token;
//   }

//   /**
//    * Sign user out.
//    *
//    * @param {Context} - Context object.
//    */
//   @Query(() => Boolean)
//   signOut(@Ctx() { cookie: { auth } }: Context) {
//     auth.set({
//       value: '',
//       maxAge: 0, // Expire the cookie
//     });

//     return true;
//   }

//   /**
//    * Validate user.
//    *
//    * @param {Context} - Context object.
//    * @returns {Promise<boolean>} True if valid, false if invalid.
//    */
//   @Query(() => Boolean)
//   async validate(@Args(() => ValidateArgs) { token }: ValidateArgs, @Ctx() { jwt }: Context) {
//     if (!token) {
//       return false;
//     }

//     await jwt.verify(token);
//     return true;
//   }
// }
