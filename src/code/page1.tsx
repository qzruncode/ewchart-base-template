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
      />
    </div>
  );
};

export default Test;
