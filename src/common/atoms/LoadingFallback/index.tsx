import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * UI to show when a component is fetching data
 */
export default function LoadingFallback() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
      <CircularProgress />
    </Box>
  );
}
