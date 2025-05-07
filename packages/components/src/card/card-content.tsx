import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  content: {
    '--_background-color':
      'var(--gui-card-content-background-color, var(--gui-color-background))',
    '--_color': 'var(--gui-card-content-color, var(--gui-color-text))',

    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: 'var(--_background-color)',
    color: 'var(--_color)',

    '&:is(:last-child)': {
      borderBottomLeftRadius: 'var(--radius-lg)',
      borderBottomRightRadius: 'var(--radius-lg)',
    },
  },
});

const CardContent: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  const classes = useClasses();

  return <div className={classes.content}>{children}</div>;
};

export default CardContent;
