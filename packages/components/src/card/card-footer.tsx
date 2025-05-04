import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderTop: '1px solid var(--gui-color-border)',
    background:
      'var(--gui-card-footer-background-color, var(--gui-color-background))',
    color: 'var(--gui-card-footer-color, var(--gui-color-text))',
  },
});

const CardFooter: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.footer}>{children}</div>;
};

export default CardFooter;
