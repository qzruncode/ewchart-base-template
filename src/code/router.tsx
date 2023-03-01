import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import Line from './line';
import Test2 from './page2';

const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/line',
          element: <Line />,
        },
        {
          path: 'page2',
          element: <Test2 />,
        },
      ],
    },
  ]);
};

export default createRouter;
