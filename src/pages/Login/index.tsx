import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Row } from "antd";
import { useContextAuth } from "../../context/auth/useContextAuth";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import { UnlockOutlined, MailOutlined } from "@ant-design/icons";
import * as Styled from "./styles";
import ErrorAlert from "../../components/Alerts/ErrorAlert";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

export const Login = () => {
  const auth = useContextAuth();
  const navigate = useNavigate();

  async function onFinish(values: { email: string; password: string }): Promise<void> {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/home");
      SuccessAlert("Login efetuado");
    } catch (error) {
      ErrorAlert("Email ou senha inválidos");
    }
  }

  const navigateToSignup = () => {
    navigate("/signup");
  }
  return (
    <>
      <Styled.Container>
        <div id="container-background">
          <Row style={{ height: "86%" }}>
            <Styled.ContentLeft span={11}>
              <Styled.CardLogin className="card-login">
                <h1 className="login-form-title-1">Login</h1>
                <Form
                  name="login"
                  layout="vertical"
                  className="login-form"
                  requiredMark={false}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Styled.FormItem
                    name="email"
                    hasFeedback
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                      { type: "email", message: "E-mail inválido." },
                    ]}
                  >
                    <Input
                      placeholder="Email"
                      prefix={<MailOutlined />}
                      autoFocus
                    />
                  </Styled.FormItem>

                  <Styled.FormItem
                    name="password"
                    hasFeedback
                  >
                    <Input.Password
                      visibilityToggle={true}
                      placeholder="Senha"
                      prefix={<UnlockOutlined />}
                    />
                  </Styled.FormItem>

                  <Styled.FormItem>
                    <Styled.ButtonSubmit type="primary" htmlType="submit">
                      Logar
                    </Styled.ButtonSubmit>
                  </Styled.FormItem>

                  <Styled.TextLogin><p>Ainda não possui uma conta?</p><Button onClick={navigateToSignup} type="link"><b>Cadastre-se.</b></Button></Styled.TextLogin>

                </Form>
              </Styled.CardLogin>
            </Styled.ContentLeft>

            <Styled.ContentRight span={13} className="card-logo">
              <Logo />
            </Styled.ContentRight>
          </Row>

        </div>

      </Styled.Container>
    </>
  );
};
