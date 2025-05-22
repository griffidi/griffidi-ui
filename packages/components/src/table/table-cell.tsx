import { makeStyles } from '@griffel/react';
import type { FC, ReactElement } from 'react';
import sharedStyles from './table-cell-shared.css.ts';

const useStyles = makeStyles({
  cell: {
    ...sharedStyles.cell,
    display: 'table-cell',
    overflow: 'hidden',
  },
});

type TableCellProps = {
  children?: ReactElement[] | ReactElement | string | undefined;
  className?: string;
};

const TableCell: FC<TableCellProps> = ({ children, className }) => {
  const classes = useStyles();

  return <div className={`${classes.cell} ${className}`}>{children}</div>;
};

export default TableCell;
