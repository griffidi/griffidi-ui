import { makeStyles } from '@griffel/react';
import type { FC, ReactElement } from 'react';
import sharedStyles from './table-cell-shared.css.ts';

const useStyles = makeStyles({
  cell: {
    ...sharedStyles.cell,
    '--_table-header-cell-background-color':
      'var(--gui-table-header-cell-background-color, var(--gui-color-background))',
    '--padding-block': '4px',

    background: 'var(--_table-header-cell-background-color)',
    borderBottom: '1px solid var(--gui-color-border)',
    color: 'var(--gui-color-primary)',
    fontSize: '1.1rem',
    fontWeight: '700',
    paddingBlock: 'var(--padding-block)',
  },
});

type TableHeaderCellProps = {
  children?: ReactElement[] | ReactElement | string | undefined;
};

const TableHeaderCell: FC<TableHeaderCellProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.cell}>{children}</div>;
};

export default TableHeaderCell;
