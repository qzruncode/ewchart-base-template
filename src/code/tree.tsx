/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import EWChart from 'ewchart';
import { Button } from 'antd';
import { disOrder } from './helper';
import TreeData from './tree.json';

const des = `
`;

const initConfig = {
  treeData: TreeData,
};

const Line = () => {
  const [chartConfig, setChartConfig] = useState(initConfig);

  const handleRefresh = () => {
    // const newChartConfig = Object.assign({}, chartConfig);
    // newChartConfig.groups.forEach(group => {
    //   group.values = disOrder(group.values);
    // });
    // setChartConfig(newChartConfig);
  };

  return (
    <div className="test_box">
      <Button onClick={handleRefresh}>刷新</Button>

      <EWChart
        type="tree"
        size={{
          // 宽度自适应
          height: 600,
          top: 20,
          right: 30,
          bottom: 30,
          left: 30,
        }}
        data={chartConfig}
      />

      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Line;
