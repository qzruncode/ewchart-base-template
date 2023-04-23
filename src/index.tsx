import * as React from 'react';
import ReactDOM from 'react-dom/client';
import createRouter from './code/router';
import { RouterProvider } from 'react-router-dom';

import './index.less';

const subAppName = 'darkTunnelBaseTemplate';

const root = ReactDOM.createRoot(document.getElementById(subAppName) as HTMLElement);

if (window.location.pathname === '/' || window.location.pathname === '/ewchart-base-template/build/') {
  window.location.replace(window.location.origin + window.location.pathname + '#/level1_line');
}

root.render(
  <React.StrictMode>
    <RouterProvider router={createRouter()} />
  </React.StrictMode>
);
