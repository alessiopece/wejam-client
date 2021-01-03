import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { hraTheme } from './theme/theme';
import Piano from './components/Piano';
import RedHook from './assets/fonts/RedHook.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: RedHook;
    src: url(${RedHook});
  }

  body {
    background-color: ${props => props.theme.colors.neutral};
  }

  h1 {
    font-family: ${props => props.theme.fonts.title};
    font-weight: bold;
    font-size: 25px;
    line-height: 27px;
    color: ${props => props.theme.colors.textPrimary};
    margin: 10px 0;
  }

  h2 {
    margin: 0;
  }

  p, span {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    color: ${props => props.theme.colors.textPrimary};
  }

  .App {

    .logo {
      font-family: RedHook;
      font-size: 100px;
      color: ${props => props.theme.colors.textPrimary};
      text-align: center;
      margin-top: 5vh;

    }

  }

  .container {
    padding: 50px 15px;
  }
`;

function App() {

  return (
    <ThemeProvider theme={hraTheme}>
      <div className="App">
        <GlobalStyle />
        <div className="logo">WeJam</div>
        <div className="container">
          <Piano />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
