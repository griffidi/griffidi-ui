import { makeStyles } from '@griffel/react';
import LinkButton from '@gui/components/button/LinkButton';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const useStyles = makeStyles({
  popover: {
    '--_inset-block-start': 0,

    contentVisibility: 'hidden',
    visibility: 'hidden',
    padding: '0.5rem 1rem',
    inset: '0 1rem auto auto',
    background: 'var(--color-gray-900)',
    borderRadius: 'var(--radius-md)',
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
      <button>
        <Bars3Icon />
      </button>
      <div>
        <button popoverTarget="menu">
          <UserCircleIcon className="w-8 h-8" />
        </button>
        <menu id="menu" popover="auto" className={styles.popover}>
          <li>
            <LinkButton href="/profile" icon={<AdjustmentsHorizontalIcon />}>
              Profile
            </LinkButton>
          </li>
          <li>
            <button>Settings</button>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </menu>
      </div>
    </header>
  );
};

export default Header;
