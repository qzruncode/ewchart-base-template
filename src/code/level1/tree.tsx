import React, { useEffect, useState } from 'react';
import EWChart from 'ewchart';
import { Button, Input, Radio, Tooltip } from 'antd';
import { ToolOutlined } from '@ant-design/icons';
import TreeData from '../data/tree.json';
import { Sandpack } from '@codesandbox/sandpack-react';

const des = `
import React, { useEffect, useState } from 'react';
import EWChart from 'ewchart';
import { Button, Input, Radio, Tooltip } from 'antd';
import { ToolOutlined } from '@ant-design/icons';
import TreeData from '../tree.json';

const Line = () => {
  const [lineType, setLineType] = useState('linkBezierCurve');
  const [chartConfig] = useState({
    spanDepth: 3, // 横向展示的最多节点个数
    depDepth: 1, // 纵向展示的做多节点层数
    treeData: TreeData,
    fixed: true, // 鼠标移出节点tooltip是否不隐藏
  });
  const [treeConfig, setTreeConfig] = useState({});
  const [expandType, setExpandType] = useState('');

  useEffect(() => {
    setTreeConfig(
      Object.assign(
        {},
        {
          chartBg: getItem('ewchart_bg_color', '#d4dd94'),
          linkBg: getItem('ewchart_link_color', '#d4dd94'),
          btnBg: getItem('ewchart_icon_color', '#d4dd94'),
        }
      )
    );
  }, [chartConfig]);

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

  const changeChartBg = (value: string) => {
    localStorage.setItem('ewchart_bg_color', value);
    setTreeConfig(Object.assign({}, { chartBg: value }));
  };

  const changeLinkBg = (value: string) => {
    localStorage.setItem('ewchart_link_color', value);
    setTreeConfig(Object.assign({}, { linkBg: value }));
  };

  const changeBtnBg = (value: string) => {
    localStorage.setItem('ewchart_icon_color', value);
    setTreeConfig(Object.assign({}, { btnBg: value }));
  };

  const getItem = (name, value) => {
    return localStorage.getItem(name) ? localStorage.getItem(name) : value;
  };

  const handleNodeClick = node => {
    alert('节点' + node.name + '被点击了');
  };

  return (
    <div className="test_box">
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

      <Tooltip
        color="white"
        placement="bottomLeft"
        trigger="click"
        title={
          <div>
            <div className="color_box_item">
              <span style={{ color: 'black' }}>背景色：</span>
              <Input
                type="color"
                defaultValue={getItem('ewchart_bg_color', '#d4dd94')}
                style={{ width: 100 }}
                onChange={e => changeChartBg(e.target.value)}
              />
            </div>
            <div className="color_box_item">
              <span style={{ color: 'black' }}>连线色：</span>
              <Input
                type="color"
                defaultValue={getItem('ewchart_link_color', '#B8B8B8')}
                style={{ width: 100 }}
                onChange={e => changeLinkBg(e.target.value)}
              />
            </div>
            <div className="color_box_item">
              <span style={{ color: 'black' }}>按钮色：</span>
              <Input
                type="color"
                defaultValue={getItem('ewchart_icon_color', '#B8B8B8')}
                style={{ width: 100 }}
                onChange={e => changeBtnBg(e.target.value)}
              />
            </div>
          </div>
        }>
        <Button size="small" style={{ marginRight: 10 }} shape="circle" icon={<ToolOutlined />} />
      </Tooltip>

      <EWChart
        renderer="svg"
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
        method={{
          onClick: handleNodeClick,
        }}
      />
    </div>
  );
};

export default Line;
`;

const Line = () => {
  const [lineType, setLineType] = useState('linkBezierCurve');
  const [chartConfig] = useState({
    spanDepth: 3, // 横向展示的最多节点个数
    depDepth: 1, // 纵向展示的做多节点层数
    treeData: TreeData,
    fixed: true, // 鼠标移出节点tooltip是否不隐藏
  });
  const [treeConfig, setTreeConfig] = useState({});
  const [expandType, setExpandType] = useState('');

  useEffect(() => {
    setTreeConfig(
      Object.assign(
        {},
        {
          chartBg: getItem('ewchart_bg_color', '#d4dd94'),
          linkBg: getItem('ewchart_link_color', '#d4dd94'),
          btnBg: getItem('ewchart_icon_color', '#d4dd94'),
        }
      )
    );
  }, [chartConfig]);

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

  const changeChartBg = (value: string) => {
    localStorage.setItem('ewchart_bg_color', value);
    setTreeConfig(Object.assign({}, { chartBg: value }));
  };

  const changeLinkBg = (value: string) => {
    localStorage.setItem('ewchart_link_color', value);
    setTreeConfig(Object.assign({}, { linkBg: value }));
  };

  const changeBtnBg = (value: string) => {
    localStorage.setItem('ewchart_icon_color', value);
    setTreeConfig(Object.assign({}, { btnBg: value }));
  };

  const getItem = (name, value) => {
    return localStorage.getItem(name) ? localStorage.getItem(name) : value;
  };

  const handleNodeClick = node => {
    alert('节点' + node.name + '被点击了');
  };

  return (
    <div className="test_box">
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

      <Tooltip
        color="white"
        placement="bottomLeft"
        trigger="click"
        title={
          <div>
            <div className="color_box_item">
              <span style={{ color: 'black' }}>背景色：</span>
              <Input
                type="color"
                defaultValue={getItem('ewchart_bg_color', '#d4dd94')}
                style={{ width: 100 }}
                onChange={e => changeChartBg(e.target.value)}
              />
            </div>
            <div className="color_box_item">
              <span style={{ color: 'black' }}>连线色：</span>
              <Input
                type="color"
                defaultValue={getItem('ewchart_link_color', '#B8B8B8')}
                style={{ width: 100 }}
                onChange={e => changeLinkBg(e.target.value)}
              />
            </div>
            <div className="color_box_item">
              <span style={{ color: 'black' }}>按钮色：</span>
              <Input
                type="color"
                defaultValue={getItem('ewchart_icon_color', '#B8B8B8')}
                style={{ width: 100 }}
                onChange={e => changeBtnBg(e.target.value)}
              />
            </div>
          </div>
        }>
        <Button size="small" style={{ marginRight: 10 }} shape="circle" icon={<ToolOutlined />} />
      </Tooltip>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, width: '50%' }}>
          <EWChart
            renderer="svg"
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
            method={{
              onClick: handleNodeClick,
            }}
          />
        </div>

        <div style={{ flex: 1, width: '50%' }}>
          <Sandpack
            template="react"
            theme="dark"
            files={{
              '/main.tsx': des,
              '/tree.json': JSON.stringify(TreeData, null, '\t'),
            }}
            options={{
              layout: 'none',
              visibleFiles: ['/main.tsx', '/tree.json'],
              activeFile: '/main.tsx',
              editorHeight: '600px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Line;
