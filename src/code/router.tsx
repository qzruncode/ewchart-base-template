import React from 'react';
import { createHashRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import LazyWrapper from './wrapper';

const createRouter = () => {
  return createHashRouter([
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
          path: 'level1_line',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/line'))} />,
        },
        {
          path: 'level1_arealine',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/arealine'))} />,
        },
        {
          path: 'level1_foottab',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/foottab'))} />,
        },
        {
          path: 'level1_tooltip',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/tooltip'))} />,
        },
        {
          path: 'level1_coordinate-tooltip',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/coordinateTooltip'))} />,
        },
        {
          path: 'level1_range',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/range'))} />,
        },
        {
          path: 'level1_pie',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/pie'))} />,
        },
        {
          path: 'level1_histogram',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/histogram'))} />,
        },
        {
          path: 'level1_scatter',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/scatter'))} />,
        },
        {
          path: 'level1_tree',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/tree'))} />,
        },
        {
          path: 'level1_candlestick',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level1/candlestick'))} />,
        },
        {
          path: 'level2_line_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level2/line'))} />,
        },
        {
          path: 'level2_arealine_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level2/arealine'))} />,
        },
        {
          path: 'level2_foottab_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level2/foottab'))} />,
        },
        {
          path: 'level2_tooltip_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level2/tooltip'))} />,
        },
        {
          path: 'level2_coordinateTooltip_canvas',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level2/coordinateTooltip'))} />,
        },
        {
          path: 'level3_range',
          element: <LazyWrapper Lazy={React.lazy(() => import('./level3/range'))} />,
        },
      ],
    },
  ]);
};

export default createRouter;
