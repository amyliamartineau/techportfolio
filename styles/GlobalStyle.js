import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-bg-dark: #181A20;
    --color-bg-light: #fafbfc;
    --color-accent: linear-gradient(90deg, #ff9ec7 0%, #c2a7ff 100%);
    --color-glow: #ffd6f6;
    --color-text-dark: #222;
    --color-text-light: #fafbfc;
    --color-glass: rgba(255,255,255,0.12);
}

html, body {
    padding: 0;
    margin: 0;
    font-family: 'Manrope', 'Montserrat Alternates', 'Quicksand', 'DM Sans', Arial, sans-serif;
    background: var(--color-bg-dark);
    color: var(--color-text-light);
    transition: background 0.4s, color 0.4s;
    min-height: 100vh;
}

* {
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}
`;
