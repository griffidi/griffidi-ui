import type { CssStyles } from '@gui/components/types/css.ts';

export default {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.9rem',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: '1.9rem',
    fontWeight: 'bold',
    color: 'var(--gui-color-text)',
  },

  headerDescription: {
    fontSize: '0.875rem',
    fontWeight: 'var(--gui-font-weight-bold)',
    color: 'var(--gui-color-text-darker)',
  },

  sectionGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',

    '& label': {
      color: 'var(--gui-color-text)',
    },
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },

  addressCityStateZip: {
    display: 'flex',
    justifyContent: 'space-between',

    '& input, & select': {
      width: '32%',
    },
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.8rem',
  },
} satisfies CssStyles;
