import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import ThemeToggle from "./ThemeToggle";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        font-family: 'Poppins', sans-serif;
        margin: 0;
        min-height: 100vh;
        transition: background-color 0.3s ease, color 0.3s ease;

        @media (prefers-reduced-motion: reduce) {
            transition: none;
        }
    }
`;

const sharedTheme = {
    link: "#2D848A",
    linkHover: "#6096BA",
};

const lightTheme = {
    ...sharedTheme,
    body: "#f0f2f5",
    text: "#1a1a1a",
    cardBackground: "#ffffff",
    cardText: "#1a1a1a",
    muted: "#5a6472",
    shadow: "rgba(0, 0, 0, 0.08)",
    linkBg: "rgba(45, 132, 138, 0.1)",
};

const darkTheme = {
    ...sharedTheme,
    body: "#121212",
    text: "#e0e0e0",
    cardBackground: "#1e1e1e",
    cardText: "#f5f5f5",
    muted: "#9aa3ad",
    shadow: "rgba(0, 0, 0, 0.4)",
    linkBg: "rgba(96, 150, 186, 0.15)",
};

const Page = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
    background: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.cardText};
    padding: 3rem 2.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px ${(props) => props.theme.shadow};
    max-width: 380px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin: 0;
`;

const Greeting = styled.p`
    font-size: 1.15rem;
    color: ${(props) => props.theme.muted};
    margin: 0;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const StyledLink = styled.a`
    color: ${(props) => props.theme.link};
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    transition: color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    &:hover {
        color: ${(props) => props.theme.linkHover};
        background-color: ${(props) => props.theme.linkBg};
        transform: translateY(-1px);
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
            <Page>
                <Container>
                    <Title>Hi, I'm Mei!</Title>
                    <Greeting>{greeting}</Greeting>
                    <LinksContainer>
                        <StyledLink href="https://github.com/mei-ridorsa" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </StyledLink>
                        <StyledLink href="https://www.linkedin.com/in/meiridorsa/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </StyledLink>
                    </LinksContainer>
                </Container>
            </Page>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </ThemeProvider>
    );
};

export default App;
