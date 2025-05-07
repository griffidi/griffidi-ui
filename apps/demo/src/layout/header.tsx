import { Logout, Settings, UserAvatar, UserProfile } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import LinkButton from '@gui/components/button/link-button.tsx';
import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '@/auth/auth-context.tsx';
import GuiIcon from '@/components/icons/gui';
import Search from '@/components/search/search.tsx';
import styles from './header.css.ts';

const useClasses = makeStyles(styles);

export default function Header() {
  const classes = useClasses();
  const { isAuthenticated, username } = useContext(AuthContext)!;

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/">
          <GuiIcon className="w-6 h-6" />
        </Link>
        <Link to="/users" hidden={!isAuthenticated}>
          Users
        </Link>
        <Link to="/customers" hidden={!isAuthenticated}>
          Customers
        </Link>
      </nav>
      <div className={classes.rightSide} hidden={!isAuthenticated}>
        <Search />
        <button popoverTarget="menu">
          <UserAvatar size={24} />
        </button>
        <menu id="menu" popover="auto" className={classes.popover}>
          <li>
            <LinkButton
              href={`/users/${username}`}
              icon={<UserProfile size={16} />}
            >
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
}
