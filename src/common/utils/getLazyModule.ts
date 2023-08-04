import { ComponentType } from 'react';

/**
 * Convert default export of ES module to React Router lazy module
 *
 * @param module ES module with default export
 * @returns object { Component: React.ComponentType }
 */
export default function getLazyModule(module: { default: ComponentType }) {
  return {
    Component: module.default,
  };
}
