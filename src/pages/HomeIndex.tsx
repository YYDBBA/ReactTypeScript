import React, { useState } from "react";
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

const HomeIndex: React.FC = (props: any) => {
  const [menuArr, setMenuArr] = useState([
    { name: "首页", path: "/home" },
    { name: "设置", path: "/home/set" },
    { name: "中心", path: "/home/my" },
    { name: "设备", path: "/home/equipment" },
    { name: "警报", path: "" },
    { name: "更多", path: "" },
  ])
  const [tab, setTab] = useState(0)
  const [logo, setLogo] = useState(require("./../assets/logo192.png"))
  const [visible, setVisible] = useState(false)
  const [rightPx, setRightPx] = useState(0)

  const handleRouter = (path: any, index: number): any => {
    setTab(index);
    if (path) {
      props.history.push(path);
    }
  };
  const showDrawer = () => {
    if (rightPx) {
      setVisible(!visible)
      setRightPx(0)
    } else {
      setVisible(!visible)
      setRightPx(256)
    }
  };
  const info = (name: string) => {
    message.warning(`${name}功能正在奔跑！`);
  };
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
                onClick={() => handleRouter(item.path, index)}
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
            <HomeOutlined onClick={() => info("home")} />
          </li>
          <li className="yy-action-item">
            <ShoppingCartOutlined onClick={() => info("购物车")} />
          </li>
          <li className="yy-action-item">
            <Badge dot>
              <BellOutlined onClick={() => info("消息")} />
            </Badge>
          </li>
        </ul>
      </header>
      <div className="yy-set-icon" style={{ right: rightPx }}>
        <SettingFilled onClick={showDrawer} />
      </div>
      <Drawer
        title="个人中心"
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

export default withRouter(React.memo(HomeIndex))