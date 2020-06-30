import React from "react";
import { Menu } from "antd";
import { withRouter } from "react-router-dom";

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

interface IState {
  collapsed: boolean;
}
interface IChildRoute {
  item: any;
  key: string;
}
@(withRouter as any)
export default class Equipment extends React.Component<any, IState> {
  public state: IState = {
    collapsed: false,
  };
  public toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  public goChildRoute(obj: IChildRoute) {
    // this.props.history.push(obj.key);
  }
  public render() {
    return (
      <div style={{ width: "15%", height: "100%" }}>
        <Menu
          defaultSelectedKeys={["/path/1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          onClick={({ item, key }) => {
            this.goChildRoute({ item, key });
          }}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/path/1" icon={<PieChartOutlined />}>
            菜单1
          </Menu.Item>
          <Menu.Item key="/path/2" icon={<DesktopOutlined />}>
            菜单2
          </Menu.Item>
          <Menu.Item key="/path/3" icon={<ContainerOutlined />}>
            菜单3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="我有子菜单">
            <Menu.Item key="/path/4">子菜单</Menu.Item>
            <Menu.Item key="/path/5">子菜单</Menu.Item>
            <Menu.Item key="/path/6">子菜单</Menu.Item>
            <Menu.Item key="/path/7">子菜单</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
