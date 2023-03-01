import React from 'react';
import EWChart from 'ewchart';

const Test = () => {
  return (
    <div className="test_box">
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
              values: [
                75, 25, 90, 251, 208, 56, 97, 79, 19, 60, 170, 248, 52, 238, 96, 132, 68, 253, 163, 98, 107, 155, 110,
                82, 93, 148, 185, 111, 55, 63,
              ],
            },
            {
              lineType: 'dotted',
              label: '昨天',
              values: [
                75, 132, 68, 253, 163, 98, 107, 25, 90, 251, 208, 56, 97, 79, 238, 96, 155, 110, 82, 93, 148, 185, 111,
                19, 60, 170, 248, 52, 55, 63,
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Test;
