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
const arr2 = [75, 132, 68, 253, 163, 98, 107, 25, 90, 251, 208, 56, 97, 79, 238, 96, 155, 110, 82, 93, 148, 185, 111, null, null, null, null, 19, 60, 63];


/**
  1. 在使用折线图时要注意，每条线中间可能会出现缺失值，有两种处理缺失值的方式
    a. 缺失值不显示，在页面上呈现的结果就是直线被打成片段
    b. 将缺失值的头和尾连接起来，使直线显示完整
  2. 在折线图中，如果需要将今天的数据和之前的数据做对比，之前的数据最好用虚线展示，以便区分
  3. 当折线图绘制大量数据，svg渲染会大幅掉帧，建议使用canvas渲染
*/

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
  yUnit: 'K', // 目前只提供'K'，对数值进行缩略，其他类型的单位直接拼接展示
  groups: [
    {
      lineType: 'solid', // 直线的样式，此为实线
      label: '今天',
      break: 'line', // 缺失值的展示方式，此为连线
      breakType: 'dotted', // 缺失值连线的样式，此为虚线
      values: arr1,
    },
    {
      lineType: 'dotted', // 直线的样式，此为虚线
      label: '昨天',
      break: 'none', // 缺失值的展示方式，此为不展示
      values: arr2,
    },
  ],
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
        renderer="svg"
        type="line"
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
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
      label: '昨天',
      break: 'none',
      values: arr2,
    },
  ],
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
        renderer="svg"
        type="line"
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
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
