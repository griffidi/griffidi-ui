import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  cell: {
    '--_table-header-cell-background-color':
      'var(--mui-table-header-cell-background-color, var(--mui-color-background))',
    '--_container-padding-block':
      'calc(var(--mui-table-cell-padding-block) - 3px)',

    background: 'var(--_table-header-cell-background-color)',
    borderBottom: '1px solid var(--mui-color-border)',
    paddingBlock: 'var(--_container-padding-block)',
  },
});

const TableHeaderCell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const styles = useStyles();

  return <div className={styles.cell}>{children}</div>;
};

export default TableHeaderCell;
