import { makeStyles } from '@griffel/react';
import { useRef } from 'react';

const useStyles = makeStyles({
  scrim: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    displan: 'none',

    '&[hidden="false"]': {
      display: 'block',
      transition: 'opacity 0.5s ease-in-out',
      opacity: 1,
    },
  },

  dialog: {
    // '--_inline-size': 'var(--gui-dialog-inline-size, 320px)',
    '--_block-size': 'var(--gui-dialog-block-size, 50px)',
    '--_inset': 'var(--gui-dialog-inset, 200px 0 0 0)',
    '--_background-color':
      'var(--gui-dialog-background-color, var(--color-gray-700))',
    '--_border-color': 'var(--gui-dialog-border-color, var(--color-slate-400))',
    '--_border-width': 'var(--gui-dialog-border-width, 1px)',
    '--_padding': 'var(--gui-dialog-padding, 1rem)',

    contentVisibility: 'hidden',
    visibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    // inlineSize: 'var(--_inline-size)',
    minBlockSize: 'var(--_block-size)',
    inset: 'var(--_inset)',
    background: 'var(--_background-color)',
    boxShadow: 'var(--gui-elevation-5)',
    borderRadius: 'var(--radius-2xl)',
    border: 'var(--_border-width) solid var(--_border-color)',
    color: 'var(--gui-color-text)',
    padding: 'var(--_padding)',
    margin: 'auto',
    zIndex: 1001,
    overflow: 'hidden',
    opacity: 0,
    transition: 'opacity 0.7s ease-in-out, block-size 0.4s ease-in-out 0.5s',

    '&[open]': {
      contentVisibility: 'visible',
      visibility: 'visible',
      opacity: 1,
    },
  },
});

type DialogProps = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
  open: boolean;
  type?: 'alert' | 'dialog';
  width: string;
  height: string;
};

const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  type,
  width,
  height,
}) => {
  const styles = useStyles();
  const role = type === 'alert' ? 'alertdialog' : 'dialog';
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <dialog
        ref={dialogRef}
        role={role}
        className={styles.dialog}
        open={open ? true : undefined}
        style={{
          width,
          height,
        }}
      >
        {children}
      </dialog>
    </>
  );
};

export default Dialog;
