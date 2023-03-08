import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;

const menus = [
  {
    key: 'ewchart',
    icon: React.createElement(NotificationOutlined),
    label: 'ewchart示例',
    children: [
      {
        key: 'line',
        label: '折线图',
      },
      {
        key: 'area-line',
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
          defaultOpenKeys={['ewchart']}
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
