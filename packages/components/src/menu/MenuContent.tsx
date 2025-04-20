import { type FC, type JSX } from 'react';

type MenuContentProps = {
  /**
   * Can contain only children of type `MenuItem`.
   */
  children: [JSX.Element, JSX.Element] | JSX.Element;
};

const MenuContent: FC<MenuContentProps> = ({ children }) => {
  return <>{children}</>;
};

export default MenuContent;
