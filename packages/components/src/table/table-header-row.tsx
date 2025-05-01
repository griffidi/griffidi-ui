import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  row: {
    display: 'table-row',
    overflow: 'hidden',
  },
});

const TableHeaderRow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const classes = useStyles();

  return <div className={classes.row}>{children}</div>;
};

export default TableHeaderRow;
