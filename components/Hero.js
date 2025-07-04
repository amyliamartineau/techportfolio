"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 6rem 1rem 2rem 1rem;
min-height: 70vh;
background: var(--color-bg-dark);
`;

const Avatar = styled.div`
width: 128px;
height: 128px;
border-radius: 50%;
overflow: hidden;
box-shadow: 0 0 32px var(--color-glow);
margin-bottom: 1.5rem;
background: var(--color-glass);
border: 3px solid #ffb6e9;
`;

const Name = styled.h1`
font-family: 'Montserrat Alternates', 'Manrope', sans-serif;
font-size: 3rem;
font-weight: 700;
background: var(--color-accent);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const Tagline = styled.h2`
font-family: 'Quicksand', 'DM Sans', sans-serif;
font-size: 1.3rem;
font-weight: 400;
color: #f9e6ff;
margin-top: 0.5rem;
letter-spacing: 1px;
text-align: center;
`;

const Socials = styled.div`
margin-top: 2rem;
display: flex;
gap: 1.5rem;
a {
    font-size: 1.6rem;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.12);
        color: #ffb6e9;
    }
}
`;

export default function Hero() {
    return (
        <HeroSection as={motion.section} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Avatar>
        <img src="/your-photo.jpg" alt="Amylia Martineau" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Avatar>
        <Name>Amylia Martineau</Name>
        <Tagline>
        Creative Technologist · Student · Mama · Forever Curious <br />
        <span style={{ fontSize: "1rem", color: "#e0cfff" }}>
        (Not on social media—email or GitHub only)
        </span>
        </Tagline>
        <Socials>
        <a href="mailto:amyliamartineau@hotmail.com" title="Email">📧</a>
        <a href="https://github.com/amyliamartineau" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
        </Socials>
        </HeroSection>
    );
}
