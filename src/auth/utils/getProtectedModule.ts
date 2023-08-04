import { ComponentType } from 'react';
import withAuth from '../hocs/withAuth';

/**
 * Require user be authenticated before rendering
 */
export default function getProtectedModule(module: { default: ComponentType }) {
  return {
    Component: withAuth(module.default),
  };
}
