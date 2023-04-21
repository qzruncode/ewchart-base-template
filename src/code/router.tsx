import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import LazyWrapper from './wrapper';

const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'readme',
          element: <LazyWrapper Lazy={React.lazy(() => import('./readme'))} />,
        },
        {
          path: 'line',
          element: <LazyWrapper Lazy={React.lazy(() => import('./line'))} />,
        },
        {
          path: 'arealine',
          element: <LazyWrapper Lazy={React.lazy(() => import('./arealine'))} />,
        },
        {
          path: 'foottab',
          element: <LazyWrapper Lazy={React.lazy(() => import('./foottab'))} />,
        },
        {
          path: 'tooltip',
          element: <LazyWrapper Lazy={React.lazy(() => import('./tooltip'))} />,
        },
        {
          path: 'coordinate-tooltip',
          element: <LazyWrapper Lazy={React.lazy(() => import('./coordinateTooltip'))} />,
        },
        {
          path: 'range',
          element: <LazyWrapper Lazy={React.lazy(() => import('./range'))} />,
        },
        {
          path: 'pie',
          element: <LazyWrapper Lazy={React.lazy(() => import('./pie'))} />,
        },
        {
          path: 'histogram',
          element: <LazyWrapper Lazy={React.lazy(() => import('./histogram'))} />,
        },
        {
          path: 'scatter',
          element: <LazyWrapper Lazy={React.lazy(() => import('./scatter'))} />,
        },
        {
          path: 'tree',
          element: <LazyWrapper Lazy={React.lazy(() => import('./tree'))} />,
        },
        {
          path: 'line_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./line_canvas'))} />,
        },
        {
          path: 'arealine_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./arealine_canvas'))} />,
        },
        {
          path: 'foottab_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./foottab_canvas'))} />,
        },
        {
          path: 'tooltip_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./tooltip_canvas'))} />,
        },
      ],
    },
  ]);
};

export default createRouter;
