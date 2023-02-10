import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Row } from "antd";
import { useContextAuth } from "../../context/auth/useContextAuth";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import * as Styled from "./styles";

export const Login = () => {
  const auth = useContextAuth();
  const navigate = useNavigate();
  const [alertVisibility, setAlertVisibility] = useState('hidden');

  const showLoginErrorAlert = {
    visibility: alertVisibility,
  } as React.CSSProperties

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);
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
    <>
      <Styled.Container>
        <Styled.LoginErrorAlert style={showLoginErrorAlert} message="Erro: Usuário não encontrado" type="error" showIcon />
        <div id="container-background">
          <Row style={{height: "86%"}}>
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
                    // label={
                    //   <div>
                    //     E-mail
                    //   </div>
                    // }
                    name="email"
                    hasFeedback
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                      { type: "email", message: "E-mail inválido." },
                    ]}
                  >
                    <Input
                      placeholder="Digite o e-mail"
                      prefix={<MailOutlined />}
                      autoFocus
                    />
                  </Styled.FormItem>

                  <Styled.FormItem
                    // label={
                    //   <div>
                    //     Senha
                    //   </div>
                    // }
                    name="password"
                    hasFeedback
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                      {
                        min: 3,
                        message: "A senha deve conter pelo menos 3 caracteres",
                      },
                      {
                        max: 45,
                        message:
                          "A senha deve conter no máximo 20 caracteres",
                      },
                    ]}
                  >
                    <Input.Password
                      visibilityToggle={false}
                      placeholder="Digite a senha"
                      prefix={<KeyOutlined />}
                    />
                  </Styled.FormItem>

                  <Styled.FormItem>
                    <Styled.ButtonSubmit type="primary" htmlType="submit">
                      Logar
                    </Styled.ButtonSubmit>
                  </Styled.FormItem>
                  
                  <Styled.TextLogin><p>Ainda não possui uma conta?</p><Button type="link"><b>Cadastre-se</b></Button></Styled.TextLogin>

                </Form>
              </Styled.CardLogin>
            </Styled.ContentLeft>

            <Styled.ContentRight span={13} className="card-logo">
              <Logo/>
            </Styled.ContentRight>
          </Row>

        </div>

      </Styled.Container>
    </>
  );
};
