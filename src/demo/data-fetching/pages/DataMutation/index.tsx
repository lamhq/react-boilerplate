import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';

import { useService } from '@/di';
import { ConfirmProvider, useConfirm } from '@/confirm';
import useLoadingState from '@/common/hooks/useLoadingState';
import { useAsyncErrorHandler } from '@/error-handler';
import DataService from '../../services/DataService';

function DeleteButton({ itemId }: { itemId: string }) {
  const dataService = useService(DataService);
  const showConfirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const deleteData = useAsyncErrorHandler(
    useCallback(async () => {
      await dataService.deleteData(itemId);
      enqueueSnackbar('Item deleted', { variant: 'success', autoHideDuration: 2000 });
    }, [itemId, dataService, enqueueSnackbar])
  );
  const [isLoading, execDelete] = useLoadingState(deleteData);

  const handleDelete = async () => {
    const shouldDelete = await showConfirm();
    if (shouldDelete) {
      await execDelete();
    }
  };

  return (
    <LoadingButton
      loading={isLoading}
      onClick={handleDelete}
      loadingPosition="start"
      startIcon={<DeleteIcon />}
      variant="contained"
      color="error"
    >
      Delete
    </LoadingButton>
  );
}

export default function DataMutationPage() {
  return (
    <ConfirmProvider>
      <DeleteButton itemId="123" />
    </ConfirmProvider>
  );
}
