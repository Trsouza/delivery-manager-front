import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
         
   --red-600: #D73343;
   --blue-601: #37D0EE;
   --purple-600: #9C34C2;
   --green-50: #E7F9ED;
   --blue-800: #14208d;
   --blue-900: #101A70;

  --orange-100: #F0E68C;
  --orange-200: #FFEFAD;
  --orange-300: #FCE588;
  --orange-600: #f9b73d;
  --orange-700: #FFA500;
  --orange-800: #FF8C00;
  --orange-900: #FF4500;
   /* background: #E65100; */


  --background: #FFFFFF;
  --blue-100: #D9F5FD;
  --blue-200: #94DCF7;
  --blue-300: #5CC1EE;
  --blue-500: #0076CE;
  --blue-600: #0672CB;
  --blue-701: #0063B8;
  --blue-8001: #00468B;
  --blue-901: #002A58;

  --gray-100: #F5F6F7;
  --gray-200: #F9F9F9;
  --gray-300: #e1e1e1;
  --gray-400: #CCCCCC;
  --gray-600: #7E7E7E;
  --gray-700: #6E6E6E;
  --gray-800: #636363;
  --gray-900: #0E0E0E;

  --red-100: #FFECEE;

  --red-700: #BB2A33;
  --red-800: #8C161F;
  --red-900: #590A0F;

  --yellow-100: #FEEFCB;
  --yellow-900: #442200;


  --white: #ffffff;
  --black: #000000;

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

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;

