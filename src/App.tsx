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
    text: "#e0e0e0",
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
    background: ${(props) => props.theme.cardBackground};
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const Greeting = styled.p`
    font-size: 1.2rem;
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
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: ${(props) => props.theme.linkHover};
    }
`;

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 22 || hour < 7) {
            setGreeting("Good night! 🌙");
        } else if (hour >= 7 && hour < 12) {
            setGreeting("Good morning! ☀️");
        } else if (hour >= 12 && hour < 19) {
            setGreeting("Good afternoon! 🌅");
        } else {
            setGreeting("Good evening! 🌆");
        }
    }, []);

    useEffect(() => {
        document.title = "Remei Ridorsa";
    }, []);

    useEffect(() => {
        console.log(
            "%cHey, curious developer! 👀",
            "color: #2D848A; font-size: 18px; font-weight: bold;"
        );
        console.log(
            "%cHope you're enjoying exploring my page! 😊",
            "color: #6096BA; font-size: 14px;"
        );
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Container>
                <Title>Hi, I'm Mei!</Title>
                <Greeting>{greeting}</Greeting>
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
