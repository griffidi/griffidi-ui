import { Logout, Settings, UserAvatar, UserProfile } from '@carbon/icons-react';
import { makeStyles } from '@griffel/react';
import LinkButton from '@gui/components/button/link-button.tsx';
import {
  Link,
  type LoaderFunctionArgs,
  redirect,
  useLoaderData,
} from 'react-router';
import GuiIcon from '@/components/icons/gui';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    gap: '1rem',

    '> a:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '6px',
    },

    '> a svg[data-icon="gui-icon"]': {
      color: '#fff',

      '&:hover': {
        color: 'var(--color-blue-500)',
      },
    },
  },

  popover: {
    '--_inset-block-start': 'calc(var(--app-header-height) / 2)',

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
      transition: 'transform 200ms ease-in-out, visibility 0ms linear 0ms',
    },
  },
});

export async function loader({ request }: LoaderFunctionArgs) {
  const { useAuth } = await import('@/hooks/useAuth.ts');
  const { isAuthenticated, username } = await useAuth(request);

  if (!isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return { username };
}

export default function Header() {
  const styles = useStyles();
  const { username } = useLoaderData<{ username: string }>() || {};

  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/">
          <GuiIcon className="w-6 h-6" />
        </Link>
        <Link to="/users">Users</Link>
        <Link to="/customers">Customers</Link>
      </nav>
      <div>
        <button popoverTarget="menu">
          <UserAvatar size={24} />
        </button>
        <menu id="menu" popover="auto" className={styles.popover}>
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
