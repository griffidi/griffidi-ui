import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  button: {
    '--_background-color':
      'var(--gui-button-background-color, var(--color-blue-500))',

    padding: '0.3rem 1.5rem',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: 'var(--_background-color)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        'color-mix(in oklab, var(--_background-color) 90%, black)',
    },
  },
});

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  const styles = useStyles();

  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
