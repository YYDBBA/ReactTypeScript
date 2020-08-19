import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from "react-router";
import './../styles/login.css'

const Login: React.FC = (props: any) => {
  return (
    <div className="yy-login">
      <div className="login-box">
        <div className="login-title">
          React管理平台
          </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={(values: any) => {
            console.log('Success:', values);
          }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
              onPressEnter={() => {
                props.history.push("/home");
              }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <span className="login-form-forgot">
              忘记密码
         </span>
          </Form.Item>
        </Form>
        <Button type="primary" className="login-btn" onClick={() => {
          props.history.push("/home");
        }}>
          登录
           </Button>
      </div>
    </div>
  );
}

export default withRouter(React.memo(Login))