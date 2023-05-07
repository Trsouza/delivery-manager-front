import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Row, Switch } from "antd";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { MaskedInput } from 'antd-mask-input';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import * as Icon from "@ant-design/icons";
import * as Styled from "./styles";
import { IUser } from "../../../interfaces/IUser";
import { signUpEmployee } from "../../../services/employee-service";
import { signUpCompany } from "../../../services/company-service";

export const UserForm = () => {
  const navigate = useNavigate();
  const [alertVisibility, setAlertVisibility] = useState('hidden');
  const [showInputEmployee, setShowInputEmployee] = useState(false);

  const showLoginErrorAlert = {
    visibility: alertVisibility,
  } as React.CSSProperties

  async function onFinish(user: IUser) {
    console.log(user);

    let userResult: any;

    if (showInputEmployee) {
      userResult = {
        password: user.password,
        name: user.name,
        email: user.email,
        phone: user.phone.replaceAll(/\D/g, ''),
        cpf: user.cpf?.replaceAll(/\D/g, '') || "",
        roles: ["EMPLOYEE"]
      }
    } else {
      userResult = {
        password: user.password,
        name: user.name,
        email: user.email,
        phone: user.phone.replaceAll(/\D/g, ''),
        cnpj: user.cnpj?.replaceAll(/\D/g, ''),
        roles: ["COMPANY"]
      }
    }

    console.log(userResult)
    try {
      showInputEmployee ? await signUpEmployee(userResult) : await signUpCompany(userResult);
      setAlertVisibility('hidden');
      navigate("/login");
    } catch (error) {
      setAlertVisibility('visible');
      setTimeout(() => {
        setAlertVisibility('hidden')
      }, 3000);
    }
  }

  const navigateToLogin = () => {
    navigate("/login");
  }

  return (
    <>
      <Styled.Container>
        <Styled.LoginErrorAlert style={showLoginErrorAlert} message="Erro: Ao cadastrar usuário" type="error" showIcon />
        <div id="container-background">
          <Row style={{ height: "86%" }}>
            <Styled.ContentLeft span={11}>
              <Styled.CardLogin className="card-login">
                <h1>Criar Conta</h1>
                <Form
                  name="singup"
                  layout="vertical"
                  className="login-form"
                  requiredMark={false}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Styled.FormItem
                    name="name"
                    hasFeedback
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                    ]}
                  >
                    <Input
                      placeholder="Nome"
                      prefix={<Icon.UserOutlined />}
                      autoFocus
                    />
                  </Styled.FormItem>

                  <Styled.FormItem
                    name="email"
                    hasFeedback
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                      { type: "email", message: "E-mail inválido." },
                    ]}
                  >
                    <Input
                      placeholder="E-mail"
                      prefix={<Icon.MailOutlined />}
                      autoFocus
                    />
                  </Styled.FormItem>

                  <Styled.FormItem
                    name="phone"
                    hasFeedback
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                    ]}
                  >
                    <MaskedInput
                      mask={'(00)0000-0000'}
                      placeholder="Telefone/Celular"
                      prefix={<Icon.PhoneOutlined />}
                    />
                  </Styled.FormItem>

                  <Styled.FormItem
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
                      visibilityToggle={true}
                      placeholder="Senha"
                      prefix={<Icon.UnlockOutlined />}
                    />
                  </Styled.FormItem>

                  <Styled.FormItem
                    name="password-confirm"
                    hasFeedback
                    dependencies={['password']}
                    rules={[
                      { required: true, message: "Campo obrigatório." },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error("As senhas não correpondem"));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      visibilityToggle={true}
                      placeholder="Confirme a senha"
                      prefix={<Icon.UnlockOutlined />}
                    />
                  </Styled.FormItem>

                  <Row style={{ justifyContent: "space-between" }}>
                    <Styled.FormItem
                      name="cnpj"
                      hidden={showInputEmployee}
                      hasFeedback
                      rules={[
                        { required: !showInputEmployee, message: "Campo obrigatório." },
                        {
                          validator: (_, value) => {
                            const valid = cnpj.isValid(value);
                            if (valid || showInputEmployee) return Promise.resolve();
                            return Promise.reject(new Error("CNPJ inválido"));
                          }
                        },
                      ]}
                    >
                      <MaskedInput
                        mask={'00.000.000/0000-00'}
                        style={{ maxWidth: 190, }}
                        placeholder="CNPJ"
                        prefix={<Icon.FieldNumberOutlined />}
                      />
                    </Styled.FormItem>

                    <Styled.FormItem
                      name="cpf"
                      hidden={!showInputEmployee}
                      hasFeedback
                      rules={[
                        { required: showInputEmployee, message: "Campo obrigatório." }, {
                          validator: (_, value) => {
                            const valid = cpf.isValid(value);
                            if (valid || !showInputEmployee) return Promise.resolve();
                            return Promise.reject(new Error("CPF inválido"));
                          }
                        },
                      ]}
                    >
                      <MaskedInput
                        mask={'000.000.000-00'}
                        style={{ maxWidth: 190, }}
                        placeholder="CPF"
                        prefix={<Icon.FieldNumberOutlined />}
                      />
                    </Styled.FormItem>

                    <Switch
                      style={{ marginTop: 8 }}
                      checkedChildren="Empresa"
                      unCheckedChildren="Funcionário"
                      defaultChecked
                      onClick={() => showInputEmployee ? setShowInputEmployee(false) : setShowInputEmployee(true)}
                    />
                  </Row>

                  <Styled.FormItem>
                    <Styled.ButtonSubmit type="primary" htmlType="submit">
                      Cadastrar
                    </Styled.ButtonSubmit>
                  </Styled.FormItem>

                  <Styled.TextLogin><p>Já possui cadastro?</p><Button onClick={navigateToLogin} type="link"><b>Faça login.</b></Button></Styled.TextLogin>

                  {/* <pre>{JSON.stringify()}</pre> */}
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
