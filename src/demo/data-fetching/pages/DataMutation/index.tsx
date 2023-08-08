import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';

import { useService } from '@/di';
import { ConfirmProvider, useConfirm } from '@/confirm';
import useLoadingState from '@/common/hooks/useLoadingState';
import DataService from '../../services/DataService';

function DeleteButton({ itemId }: { itemId: string }) {
  const dataService = useService(DataService);
  const showConfirm = useConfirm();
  const [isLoading, deleteData] = useLoadingState(() => dataService.deleteData(itemId));
  const handleDelete = async () => {
    const shouldDelete = await showConfirm();
    if (shouldDelete) {
      await deleteData();
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
