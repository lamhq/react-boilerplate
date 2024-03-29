import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useService } from '@/di';
import getResolveValue from '@/common/utils/getResolveValue';
import useRerender from '@/common/hooks/useRerender';
import withSuspense from '@/common/hocs/withSuspense';
import DataService from '../../services/DataService';

function DataFetchingPage() {
  const dataService = useService(DataService);
  const data = getResolveValue(dataService.getData());
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

export default withSuspense(DataFetchingPage);
