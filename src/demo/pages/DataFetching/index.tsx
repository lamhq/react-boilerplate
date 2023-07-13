import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { asyncData } from 'src/common/utils';
import { useService } from 'src/common/di';
import { useRerender } from 'src/common/hooks';
import { withLoadingFallback } from 'src/common/hocs';
import { ApiService } from './ApiService';

function UserProfile() {
  const apiService = useService(ApiService);
  const data = asyncData(apiService.getData());
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

export default withLoadingFallback(UserProfile);
