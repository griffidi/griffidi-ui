import type { CssStyles } from '@gui/components/types/css.ts';

export default {
  header: {
    background: 'var(--gui-color-background)',
  },

  nav: {
    display: 'flex',
    gap: '1rem',

    '> a:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '6px',
    },

    '> a svg[data-icon="gui-icon"]': {
      color: '#fff',

      '&:hover': {
        color: 'var(--color-blue-500)',
      },
    },
  },

  rightSide: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },

  popover: {
    '--_inset-block-start': 'calc(var(--app-header-height) / 2)',

    contentVisibility: 'hidden',
    visibility: 'hidden',
    paddingBlock: '0.5rem',
    paddingInline: '0.8rem 1.5rem',
    inset: '0 1rem auto auto',
    background: 'var(--color-gray-950)',
    border: '1px solid var(--color-gray-400)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    zIndex: 900,
    transform: 'translateY(var(--_inset-block-start))',
    transition: 'transform 500ms ease-in-out, visibility 0ms linear 500ms',
    willChange: 'transform',

    '&:popover-open': {
      '--_inset-block-start': 'calc(var(--app-header-height) - 0.8rem)',

      contentVisibility: 'visible',
      visibility: 'visible',
      transition: 'transform 200ms ease-in-out, visibility 0ms linear 0ms',
    },
  },
} satisfies CssStyles;
