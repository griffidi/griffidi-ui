import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderTop: '1px solid var(--mui-color-border)',
    background:
      'var(--mui-card-footer-background-color, var(--mui-color-background))',
    color: 'var(--mui-card-footer-color, var(--mui-color-text))',
  },
});

const CardFooter: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.footer}>{children}</div>;
};

export default CardFooter;
