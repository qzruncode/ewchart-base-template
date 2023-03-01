import React from 'react';
import EWChart from 'ewchart';

const Test = () => {
  return (
    <div className="test_box">
      hello1{' '}
      <EWChart
        chart={{ type: 'line' }}
        size={{
          // 宽度自适应
          height: 300,
          top: 20,
          right: 30,
          bottom: 30,
          left: 50,
        }}
        data={{
          x: {
            start: 1677629700000, // 时间戳
            end: 1677640470000, // 时间戳
            interval: 60000, // 1分钟，每个点的时间间隔
          },
        }}
      />
    </div>
  );
};

export default Test;
