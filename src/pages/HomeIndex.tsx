import React from "react";
import "./../styles/homeIndex.css";
import { withRouter } from "react-router-dom";
import {
  GithubOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { Badge, message, Drawer } from "antd";

interface IState<T> {
  menuArr: Array<T>;
  tab: number;
  logo: any;
  visible: boolean;
  rightPx: number;
}
@(withRouter as any)
export default class HomeIndex extends React.Component<any, IState<object>> {
  public state: IState<object> = {
    menuArr: [
      { name: "首页", path: "/home" },
      { name: "设置", path: "/home/set" },
      { name: "中心", path: "/home/my" },
      { name: "设备", path: "/home/equipment" },
      { name: "警报", path: "" },
      { name: "更多", path: "" },
    ],
    tab: 0,
    logo: require("./../assets/logo192.png"),
    visible: false,
    rightPx: 0,
  };

  public handleRouter = (path: any, index: number): any => {
    this.setState({
      tab: index,
    });
    if (path) {
      this.props.history.push(path);
    }
  };
  public showDrawer = () => {
    const { visible, rightPx } = this.state;
    if (rightPx) {
      this.setState({
        visible: !visible,
        rightPx: 0,
      });
    } else {
      this.setState({
        visible: !visible,
        rightPx: 256,
      });
    }
  };
  public info = (name: string) => {
    message.warning(`${name}功能正在奔跑！`);
  };
  public render() {
    const { menuArr, tab, logo, visible, rightPx } = this.state;
    return (
      <div>
        <header className="yy-header">
          <div className="yy-logo">
            <img className="yy-logo-img" src={logo} alt="" />
          </div>
          <ul className="yy-nav">
            {menuArr.map((item: any, index: number) => {
              return (
                <li
                  className={`yy-nav-item ${tab === index ? "active" : ""}`}
                  onClick={() => this.handleRouter(item.path, index)}
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <ul className="yy-action">
            <li className="yy-action-item active">
              <GithubOutlined
                onClick={() => window.open("https://github.com/YYDBBA")}
              />
            </li>
            <li className="yy-action-item">
              <HomeOutlined onClick={() => this.info("home")} />
            </li>
            <li className="yy-action-item">
              <ShoppingCartOutlined onClick={() => this.info("购物车")} />
            </li>
            <li className="yy-action-item">
              <Badge dot>
                <BellOutlined onClick={() => this.info("消息")} />
              </Badge>
            </li>
          </ul>
        </header>
        <div className="yy-set-icon" style={{ right: rightPx }}>
          <SettingFilled onClick={this.showDrawer} />
        </div>
        <Drawer
          title="系统设置"
          placement="right"
          closable={false}
          mask={false}
          visible={visible}
        >
          <p>今天天气真不错</p>
          <p>今天天气真不错</p>
          <p>今天天气真不错</p>
        </Drawer>
      </div>
    );
  }
}
