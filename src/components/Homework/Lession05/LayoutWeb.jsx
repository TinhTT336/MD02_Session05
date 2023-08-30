import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `Item ${key}`,
}));

const LayoutWeb = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          borderRight: 0,
        }}
      >
        <div className="demo-logo-vertical" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Item 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Item 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Item 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          // theme="dark"
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: "#001529",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              backgroundColor: "#001529",
              color: "#fff",
            }}
          />

          <div className="demo-logo" />
          <Menu
            // theme="black"
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            items={items1}
            style={{ color: "#fff", backgroundColor: "#001529" }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWeb;
