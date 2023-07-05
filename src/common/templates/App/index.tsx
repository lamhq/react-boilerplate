import { RouterProvider } from 'react-router-dom';
import { ServiceProvider, services } from 'src/services';
import { router } from 'src/router';

export function App() {
  return (
    <ServiceProvider services={services}>
      <RouterProvider router={router} />
    </ServiceProvider>
  );
}