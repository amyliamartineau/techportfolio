"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
max-width: 700px;
margin: 4rem auto;
background: var(--color-glass);
border-radius: 24px;
box-shadow: 0 6px 32px 0 rgba(255, 182, 233, 0.08);
padding: 2.5rem 2rem;
color: #e0cfff;
font-size: 1.13rem;
line-height: 1.7;
`;

const Heading = styled.h2`
font-family: 'Montserrat Alternates', 'Manrope', sans-serif;
font-size: 2.1rem;
margin-bottom: 1.2rem;
background: var(--color-accent);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const Subheading = styled.h3`
margin-top: 2rem;
margin-bottom: 0.3rem;
font-family: 'Quicksand', 'DM Sans', sans-serif;
font-size: 1.12rem;
color: #ffe2fa;
letter-spacing: 1px;
font-weight: 600;
`;

export default function About() {
    return (
        <AboutSection as={motion.section} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Heading>About Amylia</Heading>
        <p>
        Self-taught Python dev, digital tinkerer, and tech explorer. Bilingual (French/English) and resourceful—I'm pivoting from admin and office life into the tech world, one online course, YouTube rabbit hole, and weekend project at a time.
        </p>
        <Subheading>Who Am I?</Subheading>
        <p>
        Ambitious, fast learner, and naturally curious. At age 9, I took apart the family PC (and got it running again). Automation and streamlining are my love languages!
        </p>
        <Subheading>How I’m Learning</Subheading>
        <p>
        Not your average bootcamp grad—I'm self-taught, earning certifications, building projects solo, and googling everything (except how to spell Python).
    </p>
    <Subheading>My Style</Subheading>
    <p>
    Somewhere between “ambitious beginner” and “almost pro.” I love picking up new tech fast and building things that make life easier—for myself, and for others.
    </p>
    </AboutSection>
    );
}
