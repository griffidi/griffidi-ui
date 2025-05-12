import { makeStyles } from '@griffel/react';
import { type FC } from 'react';
import VirtualListTiny, { type ItemInfo } from 'react-tiny-virtual-list';
import styles from './list.css.ts';

const useStyles = makeStyles(styles);

type ListProps = {
  height: number;
  itemCount?: number;
  itemSize?: number;
  renderItem: (itemInfo: ItemInfo) => React.ReactNode;
};

const VirtualList: FC<ListProps> = ({ height, itemCount = 0, itemSize = 40, renderItem }) => {
  const classes = useStyles();

  return (
    <VirtualListTiny
      className={classes.list}
      height={height}
      itemCount={itemCount}
      itemSize={itemSize}
      renderItem={renderItem}
    ></VirtualListTiny>
  );
};

export default VirtualList;
