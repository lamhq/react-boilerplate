import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export interface ErrorPageProps {
  title: string;
  message: string;
}

export default function ErrorPage({ title, message }: ErrorPageProps) {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" paragraph>
        {message}
      </Typography>

      <Button variant="contained" component={Link} to="/">
        Back Home
      </Button>
    </>
  );
}
