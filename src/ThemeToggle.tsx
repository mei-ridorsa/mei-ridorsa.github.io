import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

interface Props {
    toggleTheme: () => void;
    theme: string;
}

const ToggleButton = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = ({ toggleTheme, theme }: Props) => (
    <ToggleButton onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>
        {theme === "light" ? <FaMoon aria-hidden /> : <FaSun aria-hidden />}
    </ToggleButton>
);

export default ThemeToggle;
