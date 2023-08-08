import { useEffect } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { useConfig } from 'src/configuration';
import GuestLayout from 'src/common/templates/GuestLayout';
import UnauthenticatedError from '../../types/UnauthenticatedError';
import UnauthorizedError from '../../types/UnauthorizedError';
import NetworkError from '../../types/NetworkError';
import getErrorMessage from '../../utils/getErrorMessage';
import useLoginReminder from '../../hooks/useLoginReminder';
import ErrorUI from '../ErrorUI';

/**
 * Error Boundary for React Router
 * https://reactrouter.com/en/main/route/route#errorelementerrorboundary
 * Usage: createBrowserRouter([{
 *    path: '*',
 *    element: <SomeComponent />,
 *    ErrorBoundary: RouteErrorBoundary,
 *  }])
 */
export default function RouteErrorBoundary() {
  const { auth } = useConfig();
  const error = useRouteError();
  const navigate = useNavigate();
  let title = 'Oops!';
  let content = getErrorMessage(error);
  const action = (
    <Button variant="contained" href="/">
      Back Home
    </Button>
  );

  useLoginReminder(error);

  // navigate to signin page if unauthenticated error
  useEffect(() => {
    if (error instanceof UnauthenticatedError) {
      navigate(auth.signinRoute, { state: { from: error.location }, replace: true });
    }
  });

  if (error instanceof UnauthorizedError) {
    title = 'Unauthorized';
    content = "You don't have permission to access this page";
  }

  if (error instanceof NetworkError) {
    title = 'Network Error';
  }

  return (
    <GuestLayout>
      <ErrorUI title={title} content={content} action={action} />
    </GuestLayout>
  );
}
