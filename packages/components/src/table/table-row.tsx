import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  row: {
    display: 'table-row',
    width: '100%',
  },
});

const TableRow: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.row}>{children}</div>;
};

export default TableRow;
