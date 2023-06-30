import { createBrowserRouter } from 'react-router-dom';
import { Root, loader as rootLoader, action as rootAction } from './Root';
import { ErrorPage } from './ErrorPage';
import { ContactPage, loader as contactLoader } from './ContactPage';
import { ContactEditPage, action as editAction } from './ContactEditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <ContactPage />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <ContactEditPage />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);
