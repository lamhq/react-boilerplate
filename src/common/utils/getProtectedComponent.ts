import { ComponentType } from 'react';
import { withAuth } from 'src/auth';

/**
 * Require user be authenticated before rendering
 */
export default function getProtectedComponent(module: { default: ComponentType }) {
  return {
    Component: withAuth(module.default),
  };
}
