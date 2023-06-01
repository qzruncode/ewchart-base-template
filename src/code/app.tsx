import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;

const menus = [
  {
    key: 'readme',
    label: '简介',
  },
  {
    key: 'ewchart_svg',
    icon: React.createElement(NotificationOutlined),
    label: 'svg渲染',
    children: [
      {
        key: 'level1_line',
        label: '折线图',
      },
      {
        key: 'level1_arealine',
        label: '折线面积图',
      },
      {
        key: 'level1_foottab',
        label: 'foottab',
      },
      {
        key: 'level1_tooltip',
        label: 'tooltip',
      },
      {
        key: 'level1_coordinate-tooltip',
        label: '协同tooltip',
      },
      {
        key: 'level1_range',
        label: '范围选择',
      },
      {
        key: 'level1_pie',
        label: '饼图',
      },
      {
        key: 'level1_histogram',
        label: '直方图',
      },
      {
        key: 'level1_scatter',
        label: '散点图',
      },
      {
        key: 'level1_tree',
        label: '树形图',
      },
      {
        key: 'level1_candlestick',
        label: '蜡烛图',
      },
    ],
  },
  {
    key: 'ewchart_canvas',
    icon: React.createElement(NotificationOutlined),
    label: 'canvas渲染',
    children: [
      {
        key: 'level2_line_canvas',
        label: '折线图',
      },
      {
        key: 'level2_arealine_canvas',
        label: '折线面积图',
      },
      {
        key: 'level2_foottab_canvas',
        label: 'foottab',
      },
      {
        key: 'level2_tooltip_canvas',
        label: 'tooltip',
      },
      {
        key: 'level2_coordinateTooltip_canvas',
        label: '协同tooltip',
      },
    ],
  },
  {
    key: 'ewchart_canvas_svg',
    icon: React.createElement(NotificationOutlined),
    label: 'canvas+svg组合渲染',
    children: [
      {
        key: 'level3_range',
        label: '范围选择',
      },
    ],
  },
];

const darkTunnelBaseTemplate = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(['level1_line']);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('level1_line');
    } else {
      setSelectedKeys([location.pathname.slice(1)]);
      navigate(location.pathname);
    }
  }, []);

  return (
    <Layout>
      <Sider width={230}>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={['ewchart_svg', 'ewchart_canvas', 'ewchart_canvas_svg']}
          style={{ height: '100%', borderRight: 0 }}
          items={menus}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            navigate(selectedKeys[0]);
            setSelectedKeys(selectedKeys);
          }}
        />
      </Sider>

      <Content>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default darkTunnelBaseTemplate;
