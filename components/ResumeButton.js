"use client";
import styled from "styled-components";

const Button = styled.a`
display: inline-block;
margin: 2.5rem auto 0 auto;
padding: 1rem 2.2rem;
font-size: 1.1rem;
font-weight: bold;
border-radius: 30px;
background: var(--color-accent);
color: #fff;
box-shadow: 0 0 16px #ffb6e9a0;
border: none;
transition: transform 0.16s, box-shadow 0.18s;
cursor: pointer;
text-align: center;
&:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 0 32px #ffb6e9;
    background: linear-gradient(90deg, #c2a7ff 0%, #ff9ec7 100%);
}
`;

export default function ResumeButton() {
    return (
        <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Résumé
        </Button>
    );
}
