import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  button: {
    padding: '0.3rem 1.5rem',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: 'var(--color-blue-500)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--color-blue-600)',
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
