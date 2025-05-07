import { makeStyles } from '@griffel/react';
import sharedStyles from './table-cell-shared.css.ts';

const useClasses = makeStyles({
  cell: {
    ...sharedStyles.cell,
    display: 'table-cell',
    overflow: 'hidden',
  },
});

const TableCell: React.FC<{
  children: React.ReactElement | React.ReactElement[] | string;
}> = ({ children }) => {
  const classes = useClasses();

  return <div className={classes.cell}>{children}</div>;
};

export default TableCell;
