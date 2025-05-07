import type { CssStyles } from '../types/css.ts';

export default {
  root: {
    '--_background-color':
      'var(--gui-list-background-color, var(--gui-color-background))',
    '--_on_border-color':
      'var(--gui-list-on-border-color, var(--gui-color-border))',
    '--_border-width': 'var(--gui-list-border-width, 1px)',
    '--_color': 'var(--gui-list-color, var(--gui-color-text))',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--_background-color)',
    borderRadius: 'var(--radius-lg)',
    color: 'var(--_color)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 400,
    border: 'var(--_border-width) solid transparent',
  },

  listItem: {},
} satisfies CssStyles;
