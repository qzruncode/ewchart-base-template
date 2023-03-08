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

const arr1 = [
  75,
  25,
  90,
  251,
  208,
  null,
  null,
  null,
  null,
  60,
  170,
  248,
  52,
  238,
  96,
  132,
  68,
  253,
  163,
  98,
  107,
  155,
  110,
  82,
  93,
  148,
  185,
  111,
  55,
  63,
];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const LineChart = () => {
  const [toDay, setToDay] = useState(arr1);
  return (
    <div className="my-chart">
      <Button
        onClick={() => {
          setToDay(disOrder(toDay));
        }}>
        刷新
      </Button>
      <EWChart
        type="arealine"
        size={chartSizeParams}
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
      />
    </div>
  );
};

const Tooltip = () => {
  return (
    <div className="test_box">
      <LineChart />
      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Tooltip;
