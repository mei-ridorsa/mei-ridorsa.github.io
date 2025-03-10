import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders greeting message based on time of day', () => {
    render(<App />);
    const hour = new Date().getHours();
    let expectedGreeting;

    if (hour >= 22 || hour < 7) {
      expectedGreeting = "Good night! 🌙";
    } else if (hour >= 7 && hour < 12) {
      expectedGreeting = "Good morning! ☀️";
    } else if (hour >= 12 && hour < 19) {
      expectedGreeting = "Good afternoon! 🌅";
    } else {
      expectedGreeting = "Good evening! 🌆";
    }

    expect(screen.getByText(expectedGreeting)).toBeInTheDocument();
  });

  test('renders GitHub and LinkedIn links', () => {
    render(<App />);
    const githubLink = screen.getByText(/GitHub/i);
    const linkedinLink = screen.getByText(/LinkedIn/i);

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mei-ridorsa');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/your-profile');
  });

});