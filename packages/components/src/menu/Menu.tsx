import { useId } from '@gui/core';
import { Children, type FC } from 'react';
import type { JSX } from 'react/jsx-runtime';

type MenuProps = {
  /**
   * Can contain two children including `MenuTrigger` and `MenuPopover`.
   */
  children: [JSX.Element, JSX.Element] | JSX.Element;
  /**
   * Whether the popup is open or not.
   * @default false
   */
  open?: boolean;
};

const Menu: FC<MenuProps> = props => {
  const id = useId();
  const children = Children.toArray(props.children) as React.ReactElement[];

  if (process.env.NODE_ENV !== 'production') {
    if (children.length === 0) {
      console.warn('Menu must contain at least one child');
    }

    if (children.length > 2) {
      console.warn('Menu must contain at most two children');
    }
  }

  let menuTrigger: React.ReactElement | undefined = undefined;
  let menuPopover: React.ReactElement | undefined = undefined;
  if (children.length === 2) {
    menuTrigger = children[0];
    menuPopover = children[1];
  } else if (children.length === 1) {
    menuPopover = children[0];
  }

  return <>{children}</>;
};

export default Menu;
