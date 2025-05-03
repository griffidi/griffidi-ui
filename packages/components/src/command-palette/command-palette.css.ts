import type { GriffelStyle } from '@griffel/react';

export default {
  searchTrigger: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    color: 'var(--color-gray-400)',
    fontWeight: 500,
    border: '1px solid var(--color-gray-500)',
    borderRadius: 'var(--radius-md)',
    padding: '0.3rem 0.4rem',
    width: '200px',
    cursor: 'pointer',

    '> span': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      '> span': {
        display: 'grid',
        placeContent: 'center',
        color: 'var(--color-gray-500)',
        border: '1px solid var(--color-gray-500)',
        borderRadius: 'var(--radius-sm)',
        padding: '0 0.4rem',
        fontSize: '0.7rem',
      },
    },
  },

  search: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',

    '& input': {
      width: '100%',
      outline: 'none',
      border: 'none',
    },
  },
} satisfies GriffelStyle;
