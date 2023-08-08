import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ErrorUI from '../../organisms/ErrorUI';

export default function NotFoundPage() {
  const title = 'Page not found';
  const content = "We couldn't find what you were looking for.";
  const action = (
    <Button variant="contained" component={Link} to="/">
      Back Home
    </Button>
  );
  return <ErrorUI title={title} content={content} action={action} />;
}
