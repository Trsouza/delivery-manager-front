import Styled, { createGlobalStyle } from "styled-components";
import { Button } from "antd";

export const GlobalStyle = createGlobalStyle`
 :root {

    --background: #FFF9F1;
    --white: #FFFFFF;
    --black: #000000;
         
   --red-600: #D73343;
   --blue-601: #37D0EE;
   --purple-600: #9C34C2;
   --green-50: #E7F9ED;


   --blue-100: ;
   --blue-200: #E8EAF6;
   --blue-300: #C5CAE9;
   --blue-400: #7986CB;
   --blue-500: #3B48B8;
   --blue-600: #2330A8;
   --blue-700: #14208D;
   --blue-800: #101A70;
   --blue-900: #0c1459;

  --orange-100: #FFF9F1;
  --orange-200: #FFF3E0;
  --orange-300: #FFE0B2;
  --orange-400: #FFCC80;
  --orange-500: #FF9800;
  --orange-600: #F57C00;
  --orange-700: #EF6C00;
  --orange-800: #E15A11;
  --orange-900: #E65100;
  --orange-1000: #FF4500;

  --gray-100: ;
  --gray-200: #F5F6F7;
  --gray-300: #CFD8DC;
  --gray-400: #90A4AE;
  --gray-500: #607D8B;
  --gray-600: #455A64;
  --gray-700: #37474F;
  --gray-800: #263238;
  --gray-900: #0E0E0E;

  --red-100: #FFECEE;
  --red-700: #BB2A33;
  --red-800: #8C161F;
  --red-900: #590A0F;

  --green-100: #E9F5CE;
  --green-600: #4F7D00;
  --green-700: #436f00;
  --green-800: #2C5000;
  --green-900: #193100;

}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  /* body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  } */


  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;

export const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Box = Styled.div`
  width: 450px;
  height: 250px;
  background: var(--orange-600);
  padding: 50px;
  text-align: center;
  color: var(--blue-700);
  border-radius: 10px;

`;

export const ButtonStyled = Styled(Button)`
  color: var(--blue-700);
  margin-top: 24px;

  :hover, 
  :active,
  :focus {
    color: var(--blue-900) !important;
    background: var(--orange-200)!important;
    import { Button } from 'reactstrap';

  }
`;
