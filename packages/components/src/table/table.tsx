import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  table: {
    display: 'table',
    overflow: 'hidden',
  },
});

const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.table}>{children}</div>;
};

export default Table;
