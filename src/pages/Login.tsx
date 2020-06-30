import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router";

@(withRouter as any)
export default class Login extends React.Component<any, any> {
  loginHandle = () => {
    this.props.history.push("/home");
  };
  public render() {
    return (
      <div>
        <Button type="primary" onClick={this.loginHandle}>
          登录
        </Button>
      </div>
    );
  }
}
