import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  },
});

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.content}>{children}</div>;
};

export default CardContent;
