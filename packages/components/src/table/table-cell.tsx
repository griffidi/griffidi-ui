import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  cell: {
    display: 'table-cell',
    overflow: 'hidden',
  },
});

const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.cell}>{children}</div>;
};

export default TableCell;
