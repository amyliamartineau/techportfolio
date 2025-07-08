"use client";
import styled from "styled-components";

const SkillsSection = styled.section`
padding: 3rem 1rem;
text-align: center;
max-width: 900px;
margin: 0 auto 2rem auto;
`;

const SkillsGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1.5rem;
margin-top: 2rem;
`;

const SkillItem = styled.div`
background: var(--color-glass);
border-radius: 12px;
padding: 0.7rem 1.5rem;
font-size: 1rem;
font-weight: 500;
color: #fff;
box-shadow: 0 2px 12px #ffb6e980;
`;

const skills = [
    "Python", "HTML5", "CSS3", "JavaScript", "React", "Next.js",
"Styled Components", "Git", "Self-Learning", "Automation",
"Organization", "Communication", "Bilingual (FR/EN)"
];

export default function Skills() {
    return (
        <SkillsSection id="skills">
        <h2>Skills</h2>
        <SkillsGrid>
        {skills.map((s, idx) => (
            <SkillItem key={idx}>{s}</SkillItem>
        ))}
        </SkillsGrid>
        </SkillsSection>
    );
}
