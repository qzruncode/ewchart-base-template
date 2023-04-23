/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from 'react';
import EWChart from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';
import { Sandpack } from '@codesandbox/sandpack-react';

const des = `
import React, { useMemo, useState } from 'react';
import EWChart from 'ewchart';
import { Button } from 'antd';
import { disOrder } from '../helper';

const arr1 = [75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const LineChart = ({ handleSelect }) => {
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
        renderer="svg"
        type="line"
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
        method={{
          onSelect: handleSelect,
        }}
        interactive={{
          select: {
            min: 5, // 最小的选中范围中允许出现的点个数
          },
        }}
      />
    </div>
  );
};

const Range = () => {
  const [dateText, setDateText] = useState('暂无数据');

  const handleSelect = (dateRange: Date[]) => {
    setDateText(dateRange[0].toLocaleTimeString() + '~' + dateRange[1].toLocaleTimeString());
  };

  const Line = useMemo(() => <LineChart handleSelect={handleSelect} />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Line}
      选择的时间：{dateText}
    </div>
  );
};

export default Range;
`;

const arr1 = [75, 25, 90, 251, 208, null, null, null, null, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110, 82, 93, 148, 185, 111, 55, 63];

const chartSizeParams = {
  // 宽度自适应
  height: 300,
  top: 20,
  right: 30,
  bottom: 30,
  left: 30,
};

const LineChart = ({ handleSelect }) => {
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
        renderer="svg"
        type="line"
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
        method={{
          onSelect: handleSelect,
        }}
        interactive={{
          select: {
            min: 5, // 最小的选中范围中允许出现的点个数
          },
        }}
      />
    </div>
  );
};

const Range = () => {
  const [dateText, setDateText] = useState('暂无数据');

  const handleSelect = (dateRange: Date[]) => {
    setDateText(dateRange[0].toLocaleTimeString() + '~' + dateRange[1].toLocaleTimeString());
  };

  const Line = useMemo(() => <LineChart handleSelect={handleSelect} />, []); // 必须使用useMemo避免react重绘丢掉ewchart中的状态

  return (
    <div className="test_box">
      {Line}
      选择的时间：{dateText}

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
          editorHeight: '460px',
        }}
      />
    </div>
  );
};

export default Range;
