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
        title: "Mood Dice: Board Game Edition",
        desc: "A family-friendly, mobile-first web app that brings mood-boosting activities to your game night. Features fun categories, dice-rolling, and custom activities. 100% responsive and PWA-ready.",
        img: "/mooddice-screenshot.png", // Use your new screenshot here!
        live: "https://helloamylia.vercel.app/mooddice",
        github: "https://github.com/amyliamartineau/mood-dice-app",
    },
{
    title: "This Portfolio",
    desc: "Personal site & digital playground — built with Next.js, styled-components, and a love of neon gradients.",
    img: "/portfolio-screenshot.png", // Optional: screenshot of your portfolio
    live: "https://helloamylia.vercel.app/",
    github: "https://github.com/amyliamartineau/amylia-sleek-portfolio",
}
];

export default function Projects() {
    return (
        <ProjectsSection id="projects">
        <h2>Projects</h2>
        <ProjectsGrid>
        {projects.map((proj, idx) => (
            <Card key={idx} whileHover={{ scale: 1.04 }}>
            {proj.img && (
                <img
                src={proj.img}
                alt={`${proj.title} screenshot`}
                style={{
                    width: "100%",
                    maxHeight: "140px",
                    borderRadius: "12px",
                    objectFit: "cover",
                    marginBottom: "0.6rem"
                }}
                />
            )}
            <ProjectTitle>{proj.title}</ProjectTitle>
            <ProjectDesc>{proj.desc}</ProjectDesc>
            <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
            {proj.live && (
                <ProjectLink href={proj.live} target="_blank" rel="noopener noreferrer">
                View Live
                </ProjectLink>
            )}
            {proj.github && (
                <ProjectLink href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
                </ProjectLink>
            )}
            </div>
            </Card>
        ))}
        </ProjectsGrid>
        </ProjectsSection>
    );
}
