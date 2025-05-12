import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  header: {
    '--_background-color': 'var(--gui-card-header-background-color, var(--gui-color-background))',
    '--_color': 'var(--gui-card-header-color, var(--gui-color-text))',

    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid var(--gui-color-border)',
    borderTopLeftRadius: 'var(--radius-lg)',
    borderTopRightRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--_background-color)',
    color: 'var(--_color)',

    '&:is(:last-child)': {
      borderBottomLeftRadius: 'var(--radius-lg)',
      borderBottomRightRadius: 'var(--radius-lg)',
    },
  },
});

const CardHeader: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.header}>{children}</div>;
};

export default CardHeader;
