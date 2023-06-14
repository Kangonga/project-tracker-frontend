import { createBrowserRouter } from 'react-router-dom';
import { AuthPagesContainer } from '@app/features/authentication/pages/rootAuthPage';
import Login from '@app/features/authentication/pages/login';
import App from '@app/App';
import AdminDashboard from '@app/features/dashboards/pages/adminDashboard';
import DeveloperDashboard from '@app/features/dashboards/pages/developerDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <AuthPagesContainer />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminDashboard />,
      },
      {
        path: 'developer',
        element: <DeveloperDashboard />,
      },
    ],
  },
]);

export default router;
