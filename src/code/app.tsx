import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;

const menus = [
  {
    key: '1',
    icon: React.createElement(NotificationOutlined),
    label: 'react项目',
    children: [
      {
        key: '1-1',
        label: '页面一',
      },
      {
        key: '2-2',
        label: '页面二',
      },
    ],
  },
];

const darkTunnelBaseTemplate = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  useEffect(() => {
    if (location.pathname.includes('page1')) {
      setSelectedKeys(['1', '1-1']);
    } else {
      setSelectedKeys(['1', '1-2']);
    }
  }, [location]);

  return (
    <Layout>
      <Sider width={200}>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          items={menus}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            if (key === '1-1') {
              navigate('page1');
            } else {
              navigate('page2');
            }
            setSelectedKeys(selectedKeys);
          }}
        />
      </Sider>

      <Content>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>test</Breadcrumb.Item>
            <Breadcrumb.Item>test1</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default darkTunnelBaseTemplate;
