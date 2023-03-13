import React, { useState } from 'react';
import EWChart from 'ewchart';
import { Button, Radio } from 'antd';
import { disOrder } from './helper';
import TreeData from './tree.json';

const des = `
`;

const initConfig = {
  treeData: TreeData,
};
const initTreeConfig: any = {};

const Line = () => {
  const [lineType, setLineType] = useState('linkBezierCurve');
  const [chartConfig, setChartConfig] = useState(initConfig);
  const [treeConfig, setTreeConfig] = useState(initTreeConfig);
  const [expandType, setExpandType] = useState('');

  const handleReset = () => {
    // const newChartConfig = Object.assign({}, chartConfig);
    // newChartConfig.groups.forEach(group => {
    //   group.values = disOrder(group.values);
    // });
    // setChartConfig(newChartConfig);
  };

  const changeLineType = (type: string) => {
    setLineType(type);
    setTreeConfig(Object.assign({}, { lineType: type }));
  };

  const handleCenter = () => {
    setTreeConfig(Object.assign({}, { center: true }));
  };

  const changeExpandType = (type: string) => {
    setExpandType(type);
    setTreeConfig(Object.assign({}, { expand: type }));
  };

  return (
    <div className="test_box">
      <Button onClick={handleReset}>重置</Button>

      <Radio.Group size="small" value={lineType} onChange={e => changeLineType(e.target.value)}>
        <Radio.Button value="linkBezierCurve">曲线</Radio.Button>
        <Radio.Button value="linkBroken">折线</Radio.Button>
        <Radio.Button value="linkStraight">直线</Radio.Button>
      </Radio.Group>

      <Button style={{ marginLeft: 20 }} size="small" onClick={handleCenter}>
        居中
      </Button>

      <Radio.Group
        style={{ marginLeft: 20 }}
        size="small"
        value={expandType}
        onChange={e => changeExpandType(e.target.value)}>
        <Radio.Button value="span">横向展开</Radio.Button>
        <Radio.Button value="deep">纵向展开</Radio.Button>
        <Radio.Button value="all">全部展开</Radio.Button>
      </Radio.Group>

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
        treeConfig={treeConfig}
      />

      <pre>
        <code>{des}</code>
      </pre>
    </div>
  );
};

export default Line;
