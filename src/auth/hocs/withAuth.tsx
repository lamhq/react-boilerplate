import { ComponentType } from 'react';
import UnauthenticatedError from 'src/common/types/UnauthenticatedError';
import useAuth from '../hooks/useAuth';

/**
 * HOC that wrap a component with Loading Fallback
 * @param Component React.ComponentType
 * @returns React.ReactNode
 */
export default function withAuth<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
  function ProtectedComponent(props: T) {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
      throw new UnauthenticatedError('You have to login to continue.');
    }
    return <Component {...props} />;
  }

  ProtectedComponent.displayName = `withAuth(${
    Component.displayName || Component.name || 'Component'
  })`;
  return ProtectedComponent;
}
