import * as React from 'react';
import ReactDOM from 'react-dom/client';
import createRouter from './code/router';
import { RouterProvider } from 'react-router-dom';
import * as d3 from 'd3';

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

window.d3 = d3;
const scale = d3.scaleLinear().domain([10, 130]).range([0, 960]);
scale.unknown('1000fadfad000');
console.log(scale(undefined));
