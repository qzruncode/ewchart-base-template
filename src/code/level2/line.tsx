/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import EWChart, { EWChartData } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';
import { Sandpack } from '@codesandbox/sandpack-react';

const des = `
import React, { useState } from 'react';
import EWChart, { EWChartData } from 'ewchart';
import { Button } from 'antd';
import { disOrder } from './helper';

const arr1 = [75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63];
const arr2 = [75, 132, 68, 253, 163, 98, 107, 25, 90, 251, 208, 56, 97, 79, 238, 96, 155, 110, 82, 93, 148, 185, 111, null, null, null, null, 19, 60, 63]
const initConfig: EWChartData = {
  x: {
    start: 1677658584000, // 时间戳
    end: 1677658614000, // 时间戳
    interval: 1000, // 1秒，每个点的时间间隔
  },
  y: {
    start: 0,
    end: 300,
  },
  yUnit: 'K',
  groups: [
    {
      lineType: 'solid',
      label: '今天',
      break: 'line',
      breakType: 'dotted',
      values: arr1,
    },
    {
      lineType: 'dotted',
      lineWidth: 2,
      label: '昨天',
      break: 'none',
      values: arr2,
    },
  ],
};

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const Line = () => {
  const [chartConfig, setChartConfig] = useState(initConfig);

  const handleRefresh = () => {
    const newChartConfig = Object.assign({}, chartConfig);
    newChartConfig.groups.forEach(group => {
      group.values = disOrder(group.values);
    });
    setChartConfig(newChartConfig);
  };

  return (
    <div className="test_box">
      <Button onClick={handleRefresh}>刷新</Button>
      <EWChart
        type="line"
        renderer="canvas"
        size={chartSizeParams}
        data={chartConfig}
      />
    </div>
  );
};

export default Line;
`;

const arr1 = [75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63];
const arr2 = [75, 132, 68, 253, 163, 98, 107, 25, 90, 251, 208, 56, 97, 79, 238, 96, 155, 110, 82, 93, 148, 185, 111, null, null, null, null, 19, 60, 63]
const initConfig: EWChartData = {
  x: {
    start: 1677658584000, // 时间戳
    end: 1677658614000, // 时间戳
    interval: 1000, // 1秒，每个点的时间间隔
  },
  y: {
    start: 0,
    end: 300,
  },
  yUnit: 'K',
  groups: [
    {
      lineType: 'solid',
      label: '今天',
      break: 'line',
      breakType: 'dotted',
      values: arr1,
    },
    {
      lineType: 'dotted',
      lineWidth: 2,
      label: '昨天',
      break: 'none',
      values: arr2,
    },
  ],
};

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const Line = () => {
  const [chartConfig, setChartConfig] = useState(initConfig);

  const handleRefresh = () => {
    const newChartConfig = Object.assign({}, chartConfig);
    newChartConfig.groups.forEach(group => {
      group.values = disOrder(group.values);
    });
    setChartConfig(newChartConfig);
  };

  return (
    <div className="test_box">
      <Button onClick={handleRefresh}>刷新</Button>
      <EWChart
        type="line"
        renderer="canvas"
        size={chartSizeParams}
        data={chartConfig}
      />
      <Sandpack
        template="react"
        theme="dark"
        files={{
          '/main.tsx': des,
        }}
        options={{
          layout: 'none',
          visibleFiles: ['/main.tsx'],
          activeFile: '/main.tsx',
          editorHeight: '460px'
        }}
      />
    </div>
  );
};

export default Line;
