import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '',
    borderRadius: 'var(--radius-lg)',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.card}>{children}</div>;
};

export default Card;
