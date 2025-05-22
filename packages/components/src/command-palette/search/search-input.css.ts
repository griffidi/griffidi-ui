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
      backgroundColor: 'transparent',
      fontWeight: 'var(--gui-font-weight-bold)',

      '&::placeholder': {
        fontWeight: 'var(--gui-font-weight)',
      },
    },

    '& span': {
      fontSize: '0.8rem',
      fontWeight: 'var(--gui-font-weight-bold)',
      color: 'var(--gui-color-text-darker)',
      border: '1px solid var(--gui-color-border)',
      borderRadius: '0.5rem',
      padding: '0.15rem 0.4rem',
    },
  },
} satisfies CssStyles;
