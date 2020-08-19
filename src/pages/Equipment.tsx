import React, { useState } from "react";
import { Menu } from "antd";
import './../styles/equipment.css'
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import EquipOne from "./equipment/EquipOne"
import EquipTwo from "./equipment/EquipTwo"
import EquipThree from "./equipment/EquipThree"

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Equipment: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div className="yy-menu">
        <Menu
          defaultSelectedKeys={["/home/equipment/one"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          onClick={({ item, key }) => {
            props.history.push(key);
          }}
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="/home/equipment/one" icon={<PieChartOutlined />}>
            设备管理
          </Menu.Item>
          <Menu.Item key="/home/equipment/two" icon={<DesktopOutlined />}>
            设备类型
          </Menu.Item>
          <Menu.Item key="/home/equipment/three" icon={<ContainerOutlined />}>
            设备记录
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="我有子菜单">
            <Menu.Item key="/path/4">子菜单</Menu.Item>
            <Menu.Item key="/path/5">子菜单</Menu.Item>
            <Menu.Item key="/path/6">子菜单</Menu.Item>
            <Menu.Item key="/path/7">子菜单</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <section className="yy-content">
        <Switch>
          <Route path='/home/equipment/one' component={EquipOne} />
          <Route path='/home/equipment/two' component={EquipTwo} />
          <Route path='/home/equipment/three' component={EquipThree} />
          <Redirect to='/home/equipment/one' />
        </Switch>
      </section>
    </div>
  );
}
export default withRouter(Equipment)
