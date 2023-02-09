import { Form, Input } from "antd";
import { useContextAuth } from "../../context/auth/useContextAuth";
import logo from "../../assets/delivery.svg";
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
    <Container>
      <ContentLeft>
        <IconStyle src={logo} alt="Logo react" />
        <h1>Delivery Manager</h1>
      </ContentLeft>

      <ContentRight>
        <LoginErrorAlert style={showLoginErrorAlert} message="Erro: Usuário não encontrado" type="error" showIcon />

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
            </FormItem>

            <FormItem
              label={
                <div>
                  Senha
                </div>
              }
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
            </FormItem>

            <FormItem>
              <ButtonSubmit type="primary" htmlType="submit">
                Logar
              </ButtonSubmit>
            </FormItem>
          </Form>
        </CardLogin>
      </ContentRight>
    </Container>
  );
};
