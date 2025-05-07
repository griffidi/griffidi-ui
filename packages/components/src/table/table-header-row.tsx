import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  row: {
    display: 'table-row',
    overflow: 'hidden',
  },
});

const TableHeaderRow: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  const classes = useClasses();

  return <div className={classes.row}>{children}</div>;
};

export default TableHeaderRow;
