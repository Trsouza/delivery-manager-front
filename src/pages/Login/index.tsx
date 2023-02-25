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
  // const [alertVisibility, setAlertVisibility] = useState('hidden');

  // const showLoginErrorAlert = {
  //   visibility: alertVisibility,
  // } as React.CSSProperties

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);
      // setAlertVisibility('hidden');
      navigate("/home");
      console.log("bbbbbb")
      SuccessAlert("Login efetuado");
    } catch (error) {
      console.log(error, " eee")
      // setAlertVisibility('visible');
      ErrorAlert("Email ou senha inválidos");
      // setTimeout(() => {
      //   setAlertVisibility('hidden')
      // }, 3000);
    }

  }
  
  const navigateToSignup = () => {
    navigate("/signup");
  }
  return (
    <>
      <Styled.Container>
        {/* <Styled.LoginErrorAlert style={showLoginErrorAlert} message="Erro: Email ou senha inválidos" type="error" showIcon /> */}
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
                      placeholder="Email"
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
              <Logo/>
            </Styled.ContentRight>
          </Row>

        </div>

      </Styled.Container>
    </>
  );
};
