import React, { useState, useEffect } from 'react';
    import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

    const lightTheme = {
      background: '#ffffff',
      text: '#000000'
    };

    const darkTheme = {
      background: '#181818',
      text: '#ffffff'
    };

    const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
      body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: background 0.3s, color 0.3s;
        font-family: Arial, sans-serif;
      }
    `;

    const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    `;

    const Button = styled.button`
      margin-top: 20px;
      padding: 10px;
      cursor: pointer;
    `;

    const App: React.FC = () => {
      const [theme, setTheme] = useState<'light' | 'dark'>('light');

      useEffect(() => {
        document.title = 'Remei Ridorsa';
        console.log('%cHello, developer! 👋', 'color: #00bcd4; font-size: 16px;');
        console.log('%cThis site is built with clean code, React, TypeScript, love and coffee.', 'color: #ff9800; font-size: 14px;');
      }, []);

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning!';
        if (hour < 18) return 'Good afternoon!';
        return 'Good evening!';
      };

      return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
          <Container>
            <h1>{getGreeting()}</h1>
            <p>I’m Mei, a software engineer passionate about clean code and small animals.</p>
            <p>
              <a href="https://github.com/mei-ridorsa" target="_blank" rel="noopener noreferrer">GitHub</a> |
              <a href="https://es.linkedin.com/in/meiridorsa" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            </p>
            <Button onClick={toggleTheme}>
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </Button>
          </Container>
        </ThemeProvider>
      );
    };

    export default App;