import type { CssStyles } from '@gui/components/types/css.ts';

export default {
  fill: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 'var(--radius-2xl)',
  },
} satisfies CssStyles;
