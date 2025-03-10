import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

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

const ThemeToggle = ({ toggleTheme, theme }) => (
    <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
    </ToggleButton>
);

export default ThemeToggle;
