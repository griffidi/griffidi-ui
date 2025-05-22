import type { SyntheticEvent } from 'react';

export type TypedEvent<E, T extends SyntheticEvent<E, T>> = T & {
  target: E;
};
