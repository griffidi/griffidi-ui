import React, { useMemo } from 'react';
import { useSSRContext } from '../ssr';

const IdPrefixContext = React.createContext<string | undefined>(undefined);

function useIdPrefix(): string {
  return React.useContext(IdPrefixContext) || '';
}

/**
 * Hook to generate a unique ID.
 *
 * @param prefix - Optional prefix for the ID. Defaults to 'fui-'.
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
export function useId(prefix: string = 'gui-', providedId?: string): string {
  'use no memo';

  const contextValue = useSSRContext();
  const idPrefix = useIdPrefix();

  // Checking if useId is available on React, if it is, we use it to generate the id. String concatenation is used to
  // prevent bundlers from complaining with older versions of React.
  const _useId = (React as never)['use' + 'Id'] as (() => string) | undefined;

  if (_useId) {
    const generatedId = _useId();

    // biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
    const escapedId = useMemo(
      () => generatedId.replace(/:/g, ''),
      [generatedId],
    );

    return providedId || `${idPrefix}${prefix}${escapedId}`;
  }

  // Hooks appear to be running conditionally, but they will always run in the same order since it's based on
  // the version of React being used. This is safe to ignore.
  // biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
  return useMemo(() => {
    if (providedId) {
      return providedId;
    }

    return `${idPrefix}${prefix}${++contextValue.current}`;
  }, [idPrefix, prefix, providedId, contextValue]);
}
