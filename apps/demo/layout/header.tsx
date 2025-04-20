import {
  Logout,
  Menu,
  Settings,
  UserAvatar,
  UserProfile,
} from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import LinkButton from '@gui/components/button/LinkButton';
import { Link } from 'react-router';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    gap: '1rem',

    '> a:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '6px',
    },
  },

  popover: {
    '--_inset-block-start': 0,

    contentVisibility: 'hidden',
    visibility: 'hidden',
    paddingBlock: '0.5rem',
    paddingInline: '0.8rem 1.5rem',
    inset: '0 1rem auto auto',
    background: 'var(--color-gray-950)',
    border: '1px solid var(--color-gray-400)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    zIndex: 900,
    transform: 'translateY(var(--_inset-block-start))',
    transition: 'transform 500ms ease-in-out, visibility 0ms linear 500ms',
    willChange: 'transform',

    '&:popover-open': {
      '--_inset-block-start': 'calc(var(--app-header-height) - 0.8rem)',

      contentVisibility: 'visible',
      visibility: 'visible',
    },
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/users">Users</Link>
        <Link to="/customers">Customers</Link>
      </nav>
      <div>
        <button popoverTarget="menu">
          <UserAvatar size={24} />
        </button>
        <menu id="menu" popover="auto" className={styles.popover}>
          <li>
            <LinkButton href="/profile" icon={<UserProfile size={16} />}>
              Profile
            </LinkButton>
          </li>
          <li>
            <LinkButton href="/settings" icon={<Settings size={16} />}>
              Settings
            </LinkButton>
          </li>
          <li>
            <LinkButton href="/logout" icon={<Logout size={16} />}>
              Logout
            </LinkButton>
          </li>
        </menu>
      </div>
    </header>
  );
};

export default Header;
