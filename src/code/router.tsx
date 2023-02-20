import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import Test1 from './page1';
import Test2 from './page2';

const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'page1',
          element: <Test1 />,
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
