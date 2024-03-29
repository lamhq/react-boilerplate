import { ComponentType } from 'react';
import { useLocation } from 'react-router-dom';
import { UnauthenticatedError } from '@/error-handler';
import useAuthState from '../hooks/useAuthState';

/**
 * HOC that protect component from unauthenticated access
 * @param Component React.ComponentType
 * @returns React.ReactNode
 */
export default function withAuth<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
  // define a wrapper component
  function ProtectedComponent(props: T) {
    const location = useLocation();
    const { isAuthenticated } = useAuthState();
    if (!isAuthenticated) {
      throw new UnauthenticatedError('You have to login to continue.', location);
    }
    return <Component {...props} />;
  }

  // set friendly component name in devtools
  ProtectedComponent.displayName = `withAuth(${
    Component.displayName || Component.name || 'Component'
  })`;
  return ProtectedComponent;
}
