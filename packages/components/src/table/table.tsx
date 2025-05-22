import { makeStyles } from '@griffel/react';
import { closest } from '@gui/core';
import type { FC, HTMLAttributes, MouseEvent, ReactElement } from 'react';

const useStyles = makeStyles({
  table: {
    '--_background-color': 'var(--gui-table-background-color, var(--gui-color-background))',
    '--_color': 'var(--gui-table-color, var(--gui-color-text))',

    backgroundColor: 'var(--_background-color)',
    border: '1px solid var(--gui-color-border)',
    borderRadius: 'var(--radius-xl)',
    color: 'var(--_color)',
    display: 'table',
    overflow: 'hidden',
  },
});

type TableProps = {
  children: ReactElement[] | unknown;
} & HTMLAttributes<HTMLElement>;

const Table: FC<TableProps> = ({ children, className = '' }) => {
  const classes = useStyles();

  return <div className={`${classes.table} ${className}`}>{children as ReactElement[]}</div>;
};

export default Table;
