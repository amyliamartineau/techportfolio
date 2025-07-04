"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
padding: 3rem 1rem;
max-width: 1000px;
margin: 0 auto;
`;

const ProjectsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
gap: 2rem;
`;

const Card = styled(motion.div)`
background: var(--color-glass);
border-radius: 18px;
box-shadow: 0 6px 32px 0 rgba(255, 182, 233, 0.14);
padding: 1.5rem 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
min-height: 210px;
transition: box-shadow 0.2s;
&:hover {
    box-shadow: 0 8px 48px 0 #ffb6e9;
    transform: translateY(-2px) scale(1.03);
}
`;

const ProjectTitle = styled.h3`
font-size: 1.3rem;
margin-bottom: 0.3rem;
background: var(--color-accent);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const ProjectDesc = styled.p`
font-size: 1rem;
color: #e0cfff;
margin-bottom: 0.6rem;
`;

const ProjectLink = styled.a`
margin-top: auto;
color: #ffb6e9;
font-weight: 600;
font-size: 1rem;
&:hover {
    text-decoration: underline;
}
`;

const projects = [
    {
        title: "Terminal Expense Tracker",
        desc: "A simple, Python-powered CLI app for managing and categorizing expenses (case-insensitive logic coming soon!).",
        link: "/EXPENSES.png",
    },
{
    title: "This Portfolio",
    desc: "Personal site & digital playground — built with Next.js, styled-components, and a love of neon gradients.",
    link: "#",
},
];

export default function Projects() {
    return (
        <ProjectsSection>
        <h2>Projects</h2>
        <ProjectsGrid>
        {projects.map((proj, idx) => (
            <Card key={idx} whileHover={{ scale: 1.04 }}>
            <ProjectTitle>{proj.title}</ProjectTitle>
            <ProjectDesc>{proj.desc}</ProjectDesc>
            <ProjectLink href={proj.link} target="_blank" rel="noopener noreferrer">
            View Project
            </ProjectLink>
            </Card>
        ))}
        </ProjectsGrid>
        </ProjectsSection>
    );
}
