import { makeStyles } from '@griffel/react';
import type { ButtonHTMLAttributes, FC } from 'react';

const useStyles = makeStyles({
  button: {
    '--_background-color': 'var(--gui-button-background-color, var(--gui-color-primary))',

    padding: '0.3rem 1.5rem',
    borderRadius: '6px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '400',
    backgroundColor: 'var(--_background-color)',

    '&:disabled': {
      backgroundColor: 'var(--gui-color-disabled-button)',
      color: 'var(--gui-color-disabled-button-text)',
      cursor: 'not-allowed',
    },

    '&:not([disabled]):hover': {
      backgroundColor: 'color-mix(in oklab, var(--_background-color) 90%, black)',
    },
  },
});

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, disabled, ...props }) => {
  const classes = useStyles();

  return (
    <button {...props} className={classes.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
