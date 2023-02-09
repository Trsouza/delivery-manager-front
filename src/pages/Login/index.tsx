import { Form, Input } from "antd";
import { useContextAuth } from "../../context/auth/useContextAuth";
import logo from "../../assets/car100.png";
import {
  ButtonSubmit,
  CardLogin,
  Container,
  ContentLeft,
  ContentRight,
  IconStyle,
  FormItem,
  LoginErrorAlert
} from "./styles";
import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useContextAuth();
  const navigate = useNavigate();
  const [alertVisibility, setAlertVisibility] = useState('hidden');

  const showLoginErrorAlert = {
    visibility: alertVisibility,
  } as React.CSSProperties

  async function onFinish(values: { username: string; password: string }) {
    try {
      await auth.authenticate(values.username, values.password);
      setAlertVisibility('hidden');
     navigate("/home");

    } catch (error) {
      setAlertVisibility('visible');
      setTimeout(() => {
        setAlertVisibility('hidden')
      }, 3000);
    }
  }

  return (
    <Container>
      <ContentLeft>
        <IconStyle src={logo} alt="Logo react" />
        <h1>Delivery Manager</h1>
      </ContentLeft>

      <ContentRight>
        <LoginErrorAlert style={showLoginErrorAlert} message="Error: User not found in system" type="error" showIcon />
        
        <CardLogin>
          <h1 className="login-form-title-1">Login</h1>
             <Form
            name="login"
            layout="vertical"
            className="login-form"
            requiredMark={false}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <FormItem
              label={
                <div>
                  E-mail
                </div>
              }
              name="username"
              hasFeedback
              rules={[
                { required: true, message: "The email field is mandatory." },
                {
                  min: 3,
                  message: "The email field must have at least 3 characters",
                },
                {
                  max: 45,
                  message:
                    "The email field must have a maximum of 45 characters",
                },
              ]}
            >
              <Input
                placeholder="Enter email"
                prefix={<MailOutlined />}
                autoFocus
              />
            </FormItem>

            <FormItem
              label={
                <div>
                  Password
                </div>
              }
              name="password"
              hasFeedback
              rules={[
                { required: true, message: "The password field is mandatory." },
                {
                  min: 3,
                  message: "The password field must have at least 3 characters",
                },
                {
                  max: 45,
                  message:
                    "The password field must have a maximum of 45 characters",
                },
              ]}
            >
              <Input.Password
                visibilityToggle={false}
                placeholder="Enter password"
                prefix={<KeyOutlined />}
              />
            </FormItem>

            <FormItem>
              <ButtonSubmit type="primary" htmlType="submit">
                Login
              </ButtonSubmit>
            </FormItem>
          </Form>
        </CardLogin>
      </ContentRight>
    </Container>
  );
};
