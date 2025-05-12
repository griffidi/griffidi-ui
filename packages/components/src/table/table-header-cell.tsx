import { makeStyles } from '@griffel/react';
import sharedStyles from './table-cell-shared.css.ts';

const useStyles = makeStyles({
  cell: {
    ...sharedStyles.cell,
    '--_table-header-cell-background-color':
      'var(--gui-table-header-cell-background-color, var(--gui-color-background))',
    '--padding-block': '4px',

    background: 'var(--_table-header-cell-background-color)',
    borderBottom: '1px solid var(--gui-color-border)',
    paddingBlock: 'var(--padding-block)',
    color: 'var(--gui-color-primary)',
    fontSize: '1.1rem',
    fontWeight: '700',
  },
});

const TableHeaderCell: React.FC<{
  children: React.ReactElement | React.ReactElement[] | string;
}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.cell}>{children}</div>;
};

export default TableHeaderCell;
