import React from 'react';

/**
 * To support SSR, the auto incrementing id counter is stored in a context. This allows it to be reset on every request
 * to ensure the client and server are consistent.
 *
 * @internal
 */
export type SSRContextValue = {
  current: number;
};

/**
 * Default context value to use in case there is no SSRProvider. This is fine for client-only apps.
 *
 * @internal
 */
export const defaultSSRContextValue: SSRContextValue = {
  current: 0,
};

export const SSRContext = React.createContext<SSRContextValue | undefined>(
  undefined,
) as React.Context<SSRContextValue>;

/**
 * @internal
 */
export function useSSRContext(): SSRContextValue {
  return React.useContext(SSRContext) ?? defaultSSRContextValue;
}
