import type { CssStyles } from '../types/css.ts';

export default {
  cell: {
    '--_min-width': 'var(--gui-table-cell-min-width, 100px)',
    '--_padding-inline': 'var(--gui-table-cell-padding-inline, 16px)',
    '--_padding-block': 'var(--gui-table-cell-padding-block, 14px)',

    display: 'table-cell',
    paddingInline: 'var(--_padding-inline)',
    paddingBlock: 'var(--_padding-block)',
    verticalAlign: 'middle',
    minInlineSize: 'var(--_min-width)',
  },

  'cell:not(:last-child)': {
    borderRight: '1px solid var(--gui-color-border)',
  },
} satisfies CssStyles;
