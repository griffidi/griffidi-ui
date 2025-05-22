import type { CssStyles } from '@gui/components/types/css.ts';

export default {
  footer: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: 'var(--gui-color-text-darker)',
  },

  searchBy: {
    width: 'fit-content',
  },

  icon: {
    color: 'var(--gui-color-primary)',
  },
} satisfies CssStyles;
