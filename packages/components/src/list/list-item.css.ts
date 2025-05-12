import type { CssStyles } from '../types/css.ts';

export default {
  root: {
    '--_background-color':
      'var(--gui-navigation-item-background-color, var(--gui-color-background))',
    '--_on_border-color': 'var(--gui-navigation-item-on-border-color, var(--gui-color-border))',
    '--_border-width': 'var(--gui-navigation-item-border-width, 1px)',
    '--_color': 'var(--gui-navigation-item-color, var(--gui-color-text))',
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingInline: '16px',
    background: 'var(--_background-color)',
    borderRadius: 'var(--radius-lg)',
    color: 'var(--_color)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 400,
    border: 'var(--_border-width) solid transparent',

    '&:hover': {
      border: 'var(--_border-width) solid var(--gui-color-border)',
    },
  },

  type: {
    marginRight: '8px',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  name: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: 'var(--gui-color-text)',
    fontSize: '0.9rem',
    fontWeight: 500,
    lineHeight: '1.2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  description: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: 'var(--gui-color-text-weak)',
    fontSize: '0.6rem',
  },

  icon: {
    display: 'flex',
    // marginLeft: 'auto',
    fontSize: '20px',

    '& svg': {
      width: '20px',
      height: '20px',
      color: 'var(--gui-color-text-weak)',
    },
  },
} satisfies CssStyles;
