import Styled from "styled-components";
import { Form, Button, Alert, Col, Row } from "antd";

const { Item } = Form;

export const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: white;
  padding: 20px;
  background-image: linear-gradient(to bottom, #F1E0CC, #F0B065);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLeft = Styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ContentRight = Styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

`;


export const FormItem = Styled(Item)`

  .ant-form-item-explain-error {
    text-align: left;
    font-size: 12px;
    /* margin-bottom: 15px; */
  }
  
  .ant-input-affix-wrapper {
    height: 40px;
  }

  & .ant-form-item-label {
    color: var(--gray-900);
  }

  & .ant-form-item-label label {
    width: 100%;
  }

  & .ant-form-item-label label div {
    width: 100%;
    display: flex;
    font-size: 0.9rem;

    & span {
      color: var(--red-700);
    }
  }

  & .ant-form-item-label label div a {
    text-transform: none;
    color: var(--gray-900);
  }

`;

export const CardLogin = Styled.div`
  padding: 45px 30px 35px 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 1px rgb(0 0 0 / 20%);
  background-image: linear-gradient(to bottom, #F1E0CC, #F0B065);
  width: 365px;

  h1 {
    color: #fff;
    font-size: 34px;
    margin-bottom: 15px;
    -webkit-text-stroke: 1px #FF8A00;
  }

`;

export const ButtonSubmit = Styled(Button)`
  width: 120px;
  background: var(--blue-800);
  margin-top: 10px;
  transition: filter 0.2s;
  border-radius: 100px;

  :hover, 
  :active,
  :focus {
    background: var(--blue-900) !important;
  }
`;

export const TextLogin = Styled(Row)`
  font-size: 12px;
  padding: 5px 0 0px 0;
  display: flex;
  justify-content: center;

  p {
    margin-top: 7.69px;
  }

  button {
    padding: 3px;
    b {
        color: #000000;
    }
    
  }

  button:hover {
    text-decoration: underline;
    color: #000000 !important;
  }
`;


export const LoginErrorAlert = Styled(Alert)`
  position: absolute;
  margin-top: -90vh;
  width: 45vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;
