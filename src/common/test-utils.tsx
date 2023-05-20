import { render as renderComponent, renderHook, RenderOptions } from '@testing-library/react';
import { mock } from 'jest-mock-extended';
import React, { ReactElement } from 'react';

import { ApiService } from '../api/ApiService';
import { ApiProvider } from '../api/ApiProvider';

const apiService = mock<ApiService>();

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <ApiProvider service={apiService}>{children}</ApiProvider>;
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  renderComponent(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook: typeof renderHook = (render, options) =>
  renderHook(render, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, customRenderHook as renderHook };
