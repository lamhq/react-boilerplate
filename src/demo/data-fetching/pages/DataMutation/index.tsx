import DeleteIcon from '@mui/icons-material/Delete';

import { useService } from 'src/di';
import { useConfirm } from 'src/confirm';
import useLoadingState from 'src/common/hooks/useLoadingState';
import LoadingButton from '@mui/lab/LoadingButton';
import DataService from '../../services/DataService';

export default function DataMutationPage() {
  const dataService = useService(DataService);
  const showConfirm = useConfirm();
  const [isLoading, deleteData] = useLoadingState(() => dataService.deleteData('1'));
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
