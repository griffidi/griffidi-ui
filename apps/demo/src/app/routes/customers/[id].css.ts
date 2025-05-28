import type { CssStyles } from '@gui/components/types/css.ts';

export default {
  container: {
    width: 'clamp(30rem, 50vw, 40rem)',
    margin: '0 auto',
    padding: '1.8rem',
    border: '1px solid var(--gui-color-border)',
    borderRadius: 'var(--radius-2xl)',
    backgroundColor: 'var(--gui-color-background-darker)',
    boxShadow: 'var(--shadow-lg)',
    position: 'relative',
  },
} satisfies CssStyles;
