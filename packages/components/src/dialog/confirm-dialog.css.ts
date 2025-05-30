import type { CssStyles } from '@/types/css.ts';

export default {
  title: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
} satisfies CssStyles;
