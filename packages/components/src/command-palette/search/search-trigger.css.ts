import type { CssStyles } from '../../types/css.ts';

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
      fontWeight: 200,
    },

    '&:hover': {
      border: '1px solid var(--gui-color-primary)',
    },
  },
} satisfies CssStyles;
