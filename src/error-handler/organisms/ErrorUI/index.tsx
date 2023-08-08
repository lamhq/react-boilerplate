import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface ErrorUIProps {
  title: string;
  content: string;
  action: JSX.Element;
}
/**
 * Fallback Component for `react-error-boundary`
 * Usage: <ErrorBoundary FallbackComponent={ErrorFallback}>
 */
export default function ErrorUI({ title, content, action }: ErrorUIProps) {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" role="alert" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" color="error" paragraph>
        {content}
      </Typography>

      {action}
    </Box>
  );
}
