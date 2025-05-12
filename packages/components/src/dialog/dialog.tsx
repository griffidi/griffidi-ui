import { makeStyles } from '@griffel/react';
import { useEffect, useRef } from 'react';
import styles from './dialog.css.ts';
import type { DialogPosition } from './dialog-position.ts';

const useStyles = makeStyles(styles);

type DialogProps = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
  open: boolean;
  type?: 'alert' | 'dialog';
  width?: string;
  minHeight?: string;
  position?: DialogPosition;
  onClose?: () => void;
};

const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  type,
  width = '400px',
  minHeight = '400px',
  position = { top: '200px', right: '0', bottom: '0', left: '0' },
  onClose,
}) => {
  const classes = useStyles();
  const role = type === 'alert' ? 'alertdialog' : 'dialog';
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        dialogRef.current?.close();
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleScrimClick = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      onClose?.();
    }
  };

  const Scrim = () => {
    return (
      <div className={classes.scrim} hidden={open ? undefined : true} onClick={handleScrimClick} />
    );
  };

  return (
    <>
      <Scrim />
      <dialog
        ref={dialogRef}
        role={role}
        className={classes.dialog}
        open={open ? true : undefined}
        style={{
          width,
          minHeight,
          top: position.top,
          right: position.right,
          bottom: position.bottom,
          left: position.left,
        }}
      >
        {children}
      </dialog>
    </>
  );
};

export default Dialog;
