import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { container } from 'tsyringe';
import { AuthProvider } from '@/auth';
import { ConfigProvider } from '@/configuration';
import { DIProvider } from '@/di';

const mockConfig = {
  auth: {
    signinRoute: '/auth/signin',
    authStateName: 'authState',
  },
};

function AllTheProviders({ children }: PropsWithChildren) {
  return (
    <DIProvider container={container}>
      <ConfigProvider config={mockConfig}>
        <AuthProvider>{children}</AuthProvider>
      </ConfigProvider>
    </DIProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
