import { makeStyles } from '@griffel/react';
import type { FC, MouseEvent, ReactElement } from 'react';

const useStyles = makeStyles({
  row: {
    display: 'table-row',
    width: '100%',
  },
});

type TableRowProps = {
  children: ReactElement[];
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

const TableRow: FC<TableRowProps> = ({ children, className = '', onClick }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.row} gui-table-row ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default TableRow;
