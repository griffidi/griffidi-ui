import { makeStyles } from '@griffel/react';
import type { ButtonHTMLAttributes, FC } from 'react';

const useStyles = makeStyles({
  button: {
    padding: '0.3rem 1.5rem',
    borderRadius: '8px',
    // backgroundColor: 'var(--gui-button-background-color, var(--color-blue-500))',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'color-mix(in oklab, var(--_background-color) 90%, black)',
    },
  },
});

type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const classes = useStyles();

  const buttonStyles = {
    backgroundColor: `var(--gui-button-background-color, var(${variant === 'primary' ? '--gui-color-primary' : '--gui-color-gray'}))`,
  };

  return (
    <button {...props} className={classes.button} style={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
