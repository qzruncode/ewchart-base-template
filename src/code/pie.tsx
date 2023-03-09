import React, { useEffect, useMemo, useRef, useState } from 'react';
import EWChart from 'ewchart';
import { Breadcrumb, Button } from 'antd';
import { disOrder } from './helper';

const des = `
1. 只需要改type为arealine，其他操作同折线图
  <EWChart
    type="arealine"
    ...
  />
`;

const arr = [
  {
    label: 'a1',
    value: 29649,
  },
  {
    label: 'a2',
    value: 31561,
  },
  {
    label: 'a3',
    value: 3210,
  },
  {
    label: 'a4',
    value: 4723,
  },
  {
    label: 'a5',
    value: 5287,
  },
];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const PieChart = () => {
  const [pieData, setPieData] = useState(arr);

  const handleMove = (
    type: 'enter' | 'move' | 'leave', // 鼠标事件类型
    data: Array<{ color?: string; label: string; value: number | null }>, // 当前点的信息
    position: { x: number; y: number } // 鼠标的实时位置
  ) => {
    console.log(type, data, position);
  };

  return (
    <div className="my-chart">
      <Button
        onClick={() => {
          setPieData(disOrder(pieData));
        }}>
        刷新
      </Button>
      <EWChart
        type="pie"
        size={chartSizeParams}
        data={{
          groups: pieData,
        }}
        method={{
          onMove: handleMove,
        }}
      />
    </div>
  );
};

const Tooltip = () => {
  return (
    <div className="test_box">
      <PieChart />
      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Tooltip;
