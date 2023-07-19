import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import asyncData from 'src/common/utils/asyncData';
import useRerender from 'src/common/hooks/useRerender';
import withErrorBoundary from 'src/error-handler/hocs/withErrorBoundary';
import { useService } from 'src/di';
import DataService from '../../services/DataService';

function DataFetchingPage() {
  const dataService = useService(DataService);
  const data = asyncData(dataService.getData());
  const reload = useRerender();
  return (
    <>
      <Typography variant="body1" color="info" paragraph>
        {data}
      </Typography>
      <Button variant="contained" onClick={reload}>
        Reload
      </Button>
    </>
  );
}

export default withErrorBoundary(DataFetchingPage);
