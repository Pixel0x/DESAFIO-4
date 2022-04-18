import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --green-light: #04C35C;
    --purple-light: #2B6CB0;
    --gray: #1A202C;
    --white: #ffffff;
    --white-200: #F7FAFC;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--purple); /* color of the scroll thumb */
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
