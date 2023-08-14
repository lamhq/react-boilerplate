import { MutableRefObject, PropsWithChildren, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import StyledDialog from '../../atoms/StyledDialog';

/**
 * Handling when user cancel a dialog by pressing escape or clicking outside the dialog
 * @param dialogRef
 */
function useCancelHandler(dialogRef: MutableRefObject<HTMLDialogElement | null>) {
  useEffect(() => {
    const dialogEl = dialogRef?.current;
    const handleCancel = (ev: Event) => {
      ev.preventDefault();
    };
    dialogEl?.addEventListener('cancel', handleCancel);
    return () => {
      dialogEl?.removeEventListener('cancel', handleCancel);
    };
  }, [dialogRef]);
}

/**
 * Handle outside click handler
 * @param contentRef
 * @param open
 */
function useClickHandler(
  dialogRef: MutableRefObject<HTMLDialogElement | null>,
  contentRef: MutableRefObject<HTMLDivElement | null>,
  onClose: DialogProps['onClose']
) {
  useEffect(() => {
    const contentEl = contentRef.current;
    const dialogEl = dialogRef.current;
    const handleClick = (ev: MouseEvent) => {
      if (!contentEl?.contains(ev.target as Node) && onClose) {
        ev.preventDefault();
        onClose();
      }
    };

    dialogEl?.addEventListener('click', handleClick);
    return () => {
      dialogEl?.removeEventListener('click', handleClick);
    };
  });
}

/**
 * Handle pressing Escape key
 */
function useEscapeHandler(
  dialogRef: MutableRefObject<HTMLDialogElement | null>,
  onClose: DialogProps['onClose']
) {
  useEffect(() => {
    const dialogEl = dialogRef.current;
    const handleEscKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape' && onClose) {
        onClose();
      }
    };

    dialogEl?.addEventListener('keyup', handleEscKey);
    return () => {
      dialogEl?.removeEventListener('keyup', handleEscKey);
    };
  });
}

/**
 * Display or close dialog based on prop
 */
function useDialogOpener(dialogRef: MutableRefObject<HTMLDialogElement | null>, open: boolean) {
  useEffect(() => {
    const dialogEl = dialogRef.current;

    if (dialogEl) {
      if (open) {
        dialogEl.showModal();
      } else {
        dialogEl.close();
      }
    }
  }, [open, dialogRef]);
}

export interface DialogProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
}

export default function Dialog({ isOpen, onClose, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useDialogOpener(dialogRef, isOpen);
  useCancelHandler(dialogRef);
  useEscapeHandler(dialogRef, onClose);
  useClickHandler(dialogRef, contentRef, onClose);

  return (
    <StyledDialog ref={dialogRef}>
      <Box ref={contentRef} sx={{ p: 2 }}>
        {children}
      </Box>
    </StyledDialog>
  );
}
