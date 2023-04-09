// router
import { createBrowserRouter } from 'react-router-dom';

// components
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import BasicLayout from '../layouts/BasicLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
]);

export default router;
