import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid var(--gui-color-border)',
    backgroundColor: 'var(--gui-card-header-background-color, white)',
    color: 'var(--gui-card-header-color, black)',
  },
});

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.header}>{children}</div>;
};

export default CardHeader;
