import type { CssStyles } from '../types/css.ts';

export default {
  scrim: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    displan: 'none',

    '&[hidden="false"]': {
      display: 'block',
      transition: 'opacity 0.5s ease-in-out',
      opacity: 1,
    },
  },

  dialog: {
    '--_block-size': 'var(--gui-dialog-block-size, 50px)',
    '--_background-color':
      'var(--gui-dialog-background-color, var(--color-gray-800))',
    '--_border-color':
      'var(--gui-dialog-border-color, var(--gui-color-border))',
    '--_border-width': 'var(--gui-dialog-border-width, 1px)',
    '--_padding': 'var(--gui-dialog-padding, 0.75rem)',

    contentVisibility: 'hidden',
    visibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minBlockSize: 'var(--_block-size)',
    background: 'var(--_background-color)',
    boxShadow: 'var(--gui-elevation-5)',
    borderRadius: 'var(--radius-2xl)',
    border: 'var(--_border-width) solid var(--_border-color)',
    color: 'var(--gui-color-text)',
    padding: 'var(--_padding)',
    marginInline: 'auto',
    zIndex: 1001,
    overflow: 'hidden',
    opacity: 0,
    transition: 'opacity 0.7s ease-in-out, block-size 0.4s ease-in-out 0.5s',

    '&[open]': {
      contentVisibility: 'visible',
      visibility: 'visible',
      opacity: 1,
    },
  },
} satisfies CssStyles;
