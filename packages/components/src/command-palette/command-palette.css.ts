import type { CssStyles } from '../types/css.ts';

export default {
  searchTrigger: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    color: 'var(--color-gray-400)',
    fontWeight: 500,
    border: '1px solid var(--gui-color-border)',
    borderRadius: '8px',
    padding: '0.4rem 0.6rem',
    width: '200px',
    cursor: 'pointer',

    '> span': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',

      '> span': {
        display: 'grid',
        placeContent: 'center',
        border: '1px solid var(--gui-color-border)',
        borderRadius: 'var(--radius-sm)',
        padding: '0 0.4rem',
        fontSize: '0.7rem',
      },
    },
  },

  searchInput: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',

    '& input': {
      width: '100%',
      outline: 'none',
      border: 'none',
    },
  },

  searchResults: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    overflowY: 'auto',
    marginTop: '10px',
  },
} satisfies CssStyles;
