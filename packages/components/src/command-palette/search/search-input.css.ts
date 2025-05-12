import type { CssStyles } from '../../types/css.ts';

export default {
  searchInput: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',

    '& svg:has(+ input:focus)': {
      color: 'var(--gui-color-primary)',
    },

    '& input': {
      width: '100%',
      outline: 'none',
      border: 'none',
    },
  },
} satisfies CssStyles;
