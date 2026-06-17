import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const MoonIcon = FaMoon as unknown as React.FC;
const SunIcon = FaSun as unknown as React.FC;

interface Props {
    toggleTheme: () => void;
    theme: string;
}

const ToggleButton = styled.button`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  border-radius: 999px;
  transition: background-color 0.25s ease, transform 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.linkBg};
    transform: scale(1.1);
  }
`;

const ThemeToggle = ({ toggleTheme, theme }: Props) => (
    <ToggleButton onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>
        <span aria-hidden="true">{theme === "light" ? <MoonIcon /> : <SunIcon />}</span>
    </ToggleButton>
);

export default ThemeToggle;
