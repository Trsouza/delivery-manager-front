import styled from "styled-components";
import { Form, Button, Alert } from "antd";

const { Item } = Form;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h1 {
    color: var(--white);
  }
`;

export const ContentLeft = styled.div`
  background: var(--orange-300);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconStyle = styled.img`
  margin-top: 16vh;
  width: 30.2rem;

  @media (max-width: 1400px) {
    width: 31.2rem;
  }
`;


export const FormItem = styled(Item)`
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

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: var(--white);
`;

export const CardLogin = styled.div`
  h1 {
    color: var(--gray-800);
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.005em;
    margin-bottom: 40px;

    @media (max-width: 1200px) {
      margin-top: 20%;
    }
  }
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
  background: var(--orange-700);

  transition: filter 0.2s;

  :hover, 
  :active,
  :focus {
    background: var(--orange-800) !important;
  }
`;

export const LoginErrorAlert = styled(Alert)`
  position: absolute;
  margin-top: -90vh;
  width: 45vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;
