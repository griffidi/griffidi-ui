import { Bars3Icon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const handleMenuClick = () => {
    console.log('Menu button clicked');
  };

  return (
    <header>
      <button onClick={handleMenuClick}>
        <Bars3Icon />
      </button>
      <button onClick={() => console.log('User button clicked')}>
        <UserCircleIcon />
      </button>
    </header>
  );
};

export default Header;
