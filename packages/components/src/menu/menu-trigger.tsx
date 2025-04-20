import type { JSX } from 'react/jsx-runtime';

type MenuTriggerProps = {
  /**
   * Can contain only children of type `MenuItem`.
   */
  children: [JSX.Element, JSX.Element] | JSX.Element;
};

const MenuTrigger: React.FC<MenuTriggerProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default MenuTrigger;
