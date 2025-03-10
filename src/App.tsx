import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import ThemeToggle from "./ThemeToggle";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
`;

const lightTheme = {
    body: "#f9f9f9",
    text: "#121212",
    cardBackground: "#090302",
    link: "#2D848A",
    linkHover: "#6096BA",
};

const darkTheme = {
    body: "#121212",
    text: "#e0e0e0",
    cardBackground: "#1e1e1e",
    link: "#2D848A",
    linkHover: "#6096BA",
};


const Container = styled.div`
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;

    @media (prefers-color-scheme: dark) {
        background: rgba(0, 0, 0, 0.5);
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const LinksContainer = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
`;

const StyledLink = styled.a`
    color: ${(props) => props.theme.link};
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s ease;
`;

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Container>
                <Title>Hi, I'm Mei!</Title>
                <LinksContainer>
                    <StyledLink href="https://github.com/mei-ridorsa" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </StyledLink>
                    <StyledLink href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </StyledLink>
                </LinksContainer>
            </Container>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </ThemeProvider>
    );
};

export default App;
