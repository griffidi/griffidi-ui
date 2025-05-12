import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  table: {
    '--_background-color': 'var(--gui-table-background-color, var(--gui-color-background))',
    '--_color': 'var(--gui-table-color, var(--gui-color-text))',

    display: 'table',
    overflow: 'hidden',
    backgroundColor: 'var(--_background-color)',
    color: 'var(--_color)',
    border: '1px solid var(--gui-color-border)',
    borderRadius: 'var(--radius-xl)',
  },
});

const Table: React.FC<{
  children: React.ReactElement | React.ReactElement[] | unknown;
  className?: string | undefined;
}> = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.table}${className ? ` ${className}` : ''}`}>
      {children as React.ReactElement[]}
    </div>
  );
};

export default Table;
