import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigation } from 'react-router-dom';

export default function NavigationProgress() {
  const { state } = useNavigation();

  return state !== 'idle' ? (
    <Box sx={{ width: '100%', zIndex: 1200, position: 'fixed' }}>
      <LinearProgress />
    </Box>
  ) : null;
}
