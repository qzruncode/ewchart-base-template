/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import EWChart from 'ewchart';
import { Breadcrumb, Button } from 'antd';
import { disOrder } from './helper';

const des = 
`
1. tooltip
`

const arr1 = [
  75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63,
];

const Tooltip = () => {
  const [toDay, setToDay] = useState(arr1);

  const handleMove = (
    type: 'enter' | 'move' | 'leave', // 鼠标事件类型
    data: Array<{ color?: string; label: string; value: number | null; x: number; y: number }>, // 当前点的信息
    position: { x: number; y: number } // 鼠标的实时位置
  ) => {
    console.log('handleMove', type, data, position);
  }

  return (
    <div className="test_box">
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ewchart</Breadcrumb.Item>
        <Breadcrumb.Item>line</Breadcrumb.Item>
      </Breadcrumb>

      <Button onClick={() => {
        setToDay(disOrder(toDay))
      }}>刷新</Button>
          
      <EWChart
        chart={{ type: 'line' }}
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
        data={{
          x: {
            start: 1677658584000, // 时间戳
            end: 1677658614000, // 时间戳
            interval: 1000, // 1秒，每个点的时间间隔
          },
          y: {
            start: 10,
            end: 300,
          },
          yUnit: 'K',
          groups: [
            {
              lineType: 'solid',
              label: '今天',
              break: 'line',
              breakType: 'dotted',
              values: toDay,
            },
          ],
        }}
        onMove={handleMove}
      />

      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Tooltip;
