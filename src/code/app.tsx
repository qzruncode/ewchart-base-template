import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;

const menus = [
  {
    key: 'ewchart_svg',
    icon: React.createElement(NotificationOutlined),
    label: 'svg渲染',
    children: [
      {
        key: 'readme',
        label: '简介',
      },
      {
        key: 'line',
        label: '折线图',
      },
      {
        key: 'arealine',
        label: '折线面积图',
      },
      {
        key: 'foottab',
        label: 'foottab',
      },
      {
        key: 'tooltip',
        label: 'tooltip',
      },
      {
        key: 'coordinate-tooltip',
        label: '协同tooltip',
      },
      {
        key: 'range',
        label: '范围选择',
      },
      {
        key: 'pie',
        label: '饼图',
      },
      {
        key: 'histogram',
        label: '直方图',
      },
      {
        key: 'scatter',
        label: '散点图',
      },
      {
        key: 'tree',
        label: '树形图',
      },
    ],
  },
  {
    key: 'ewchart_canvas',
    icon: React.createElement(NotificationOutlined),
    label: 'canvas渲染',
    children: [
      {
        key: 'line_canvas',
        label: '折线图',
      },
      {
        key: 'arealine_canvas',
        label: '折线面积图',
      },
      {
        key: 'tooltip_canvas',
        label: 'tooltip',
      },
    ],
  },
];

const darkTunnelBaseTemplate = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(['line']);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('line');
    } else {
      setSelectedKeys([location.pathname.slice(1)]);
      navigate(location.pathname);
    }
  }, []);

  return (
    <Layout>
      <Sider width={200}>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={['ewchart_svg', 'ewchart_canvas']}
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
