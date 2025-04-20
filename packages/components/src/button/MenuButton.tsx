import type { FC, JSX } from 'react';

export type MenuPopoverProps = {
  /**
   * The id of the target element that will trigger the popover.
   */
  targetId: string;
  /**
   * Can contain just about any element.
   */
  children: [JSX.Element, JSX.Element] | JSX.Element;
};

/**
 * MenuButton component.
 *
 * @param {MenuPopoverProps} props - The props for the MenuButton component.
 * @returns JSX.Element.
 */
const MenuButton: FC<MenuPopoverProps> = ({ children, targetId }) => {
  return <button popoverTarget={targetId}>{children}</button>;
};

export default MenuButton;
