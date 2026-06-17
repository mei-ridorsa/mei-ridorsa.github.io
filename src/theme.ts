const sharedTheme = {
    link: "#2D848A",
    linkHover: "#6096BA",
};

export type AppTheme = {
    body: string;
    text: string;
    cardBackground: string;
    cardText: string;
    muted: string;
    shadow: string;
    link: string;
    linkHover: string;
    linkBg: string;
};

export const lightTheme: AppTheme = {
    ...sharedTheme,
    body: "#f0f2f5",
    text: "#1a1a1a",
    cardBackground: "#ffffff",
    cardText: "#1a1a1a",
    muted: "#5a6472",
    shadow: "rgba(0, 0, 0, 0.08)",
    linkBg: "rgba(45, 132, 138, 0.1)",
};

export const darkTheme: AppTheme = {
    ...sharedTheme,
    body: "#121212",
    text: "#e0e0e0",
    cardBackground: "#1e1e1e",
    cardText: "#f5f5f5",
    muted: "#9aa3ad",
    shadow: "rgba(0, 0, 0, 0.4)",
    linkBg: "rgba(96, 150, 186, 0.15)",
};
