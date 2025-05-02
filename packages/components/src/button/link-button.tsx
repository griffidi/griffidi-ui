import { makeStyles } from '@griffel/react';
import type { JSX } from 'react/jsx-runtime';

type LinkButtonProps = {
  children: React.ReactElement | React.ReactElement[] | string;
  icon: JSX.Element;
  href: string;
};

const useStyles = makeStyles({
  linkButton: {
    display: 'flex',
    gap: '0.8rem',
    alignItems: 'center',
  },
});

const LinkButton: React.FC<LinkButtonProps> = ({ children, icon, href }) => {
  const styles = useStyles();

  return (
    <a className={styles.linkButton} href={href}>
      {icon}
      {children}
    </a>
  );
};

export default LinkButton;
