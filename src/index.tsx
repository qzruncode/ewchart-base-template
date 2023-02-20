import * as React from 'react';
import ReactDOM from 'react-dom/client';
import createRouter from './code/router';
import { RouterProvider } from 'react-router-dom';

import './index.less';

const subAppName = 'darkTunnelBaseTemplate';

const root = ReactDOM.createRoot(document.getElementById(subAppName) as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={createRouter()} />
  </React.StrictMode>
);
