import { type GriffelStyle, shorthands } from '@griffel/react';

export const styles = {
  '--gui-table-cell-padding-inline': '16px;',
  '--gui-table-cell-padding-block': '12px',

  '--_container-min-width': 'var(--gui-table-cell-min-width, 100px)',
  '--_container-padding-inline': 'var(--gui-table-cell-padding-inline)',
  '--_container-padding-block': 'var(--gui-table-cell-padding-block)',

  display: 'table-cell',
  paddingInline: 'var(--_container-padding-inline)',
  paddingBlock: 'var(--_container-padding-block)',
  verticalAlign: 'middle',
  minInlineSize: 'var(--_container-min-width)',

  'cell:not(:last-child)': {
    borderRight: '1px solid var(--mui-color-border)',
  },
} satisfies GriffelStyle;
