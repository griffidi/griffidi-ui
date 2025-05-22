import type { CssStyles } from '../types/css.ts';

export default {
  root: {
    '--_border-width': 'var(--gui-navigation-item-border-width, 1px)',
    '--_color': 'var(--gui-navigation-item-color, var(--gui-color-text))',
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingInline: '16px',
    background: 'var(--gui-navigation-item-background-color, var(--gui-color-background)))',
    borderRadius: 'var(--radius-lg)',
    color: 'var(--_color)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 400,
    border: 'var(--_border-width) solid transparent',

    '&:hover': {
      backgroundColor: 'var(--gui-color-background-lighter)',

      '& svg': {
        color: 'var(--gui-color-primary)',
      },

      '& .trailing-icon': {
        opacity: 1,
        visibility: 'visible',
        contentVisibility: 'visible',
      },
    },

    '&.gui-list-item-selected': {
      backgroundColor: 'var(--gui-color-background-lighter)',
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
    color: 'var(--gui-color-text-lighter)',
    fontSize: '0.6rem',
  },

  leadingIcon: {
    display: 'flex',
    fontSize: '20px',

    '& svg': {
      width: '20px',
      height: '20px',
      color: 'var(--gui-color-text-lighter)',
      transition: 'color 0.3s ease-in-out',
      willChange: 'color',
    },
  },

  trailingIcon: {
    display: 'flex',
    marginLeft: 'auto',
    fontSize: '20px',
    opacity: 0,
    visibility: 'hidden',
    contentVisibility: 'hidden',
    transition: 'opacity 0.3s ease-in-out',
    willChange: 'opacity',

    '& svg': {
      width: '20px',
      height: '20px',
      color: 'var(--gui-color-text-lighter)',
    },
  },
} satisfies CssStyles;
