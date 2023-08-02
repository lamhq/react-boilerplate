import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Page not found
      </Typography>

      <Typography variant="body1" paragraph>
        We couldn&apos;t find what you were looking for.
      </Typography>

      <Button variant="contained" component={Link} to="/">
        Back Home
      </Button>
    </>
  );
}
