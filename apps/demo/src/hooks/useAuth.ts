import { isNotEmpty } from '@gui/core';
import { getSession } from '@/app/sessions.server.ts';
import type { AuthSession } from '@/auth/auth-session.ts';

/**
 * This hook is used to get the auth session from the request.
 * It returns the token and username from the session.
 *
 * @param {Request} request - The request object.
 * @returns {}
 */
export const useAuth = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'));
  const userId = await session.get('userId');
  const { token = null, username = null } = userId
    ? (JSON.parse(userId) as AuthSession)
    : {};
  return { token, username, isAuthenticated: isNotEmpty(token) };
};
