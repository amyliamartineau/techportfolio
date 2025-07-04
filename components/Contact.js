"use client";
import styled from "styled-components";

const ContactSection = styled.section`
max-width: 600px;
margin: 4rem auto 2rem auto;
padding: 2.5rem 2rem 2rem 2rem;
border-radius: 22px;
background: var(--color-glass);
box-shadow: 0 6px 32px 0 rgba(255, 182, 233, 0.08);
color: #e0cfff;
text-align: center;
`;

const ContactLinks = styled.div`
display: flex;
justify-content: center;
gap: 2.5rem;
margin-top: 1.2rem;
a {
    font-size: 1.7rem;
    color: #ffe2fa;
    transition: color 0.18s, transform 0.15s;
    &:hover {
        color: #ffb6e9;
        transform: scale(1.13);
    }
}
`;

export default function Contact() {
    return (
        <ContactSection>
        <h2>Let’s Connect</h2>
        <p>
        Want to collaborate, chat tech, or just say hi? <br />
        Email me or check out my GitHub.<br />
        <span style={{ fontSize: "1rem", color: "#e0cfff" }}>
        (I’m not on social media right now)
        </span>
        </p>
        <ContactLinks>
        <a href="mailto:amyliamartineau@hotmail.com" title="Email">📧</a>
        <a href="https://github.com/amyliamartineau" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
        </ContactLinks>
        </ContactSection>
    );
}
