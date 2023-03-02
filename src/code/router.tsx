import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import Line from './line';
import Tooltip from './tooltip';

const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'line',
          element: <Line />,
        },
        {
          path: 'tooltip',
          element: <Tooltip />,
        },
      ],
    },
  ]);
};

export default createRouter;
