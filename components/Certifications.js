"use client";
import styled from "styled-components";

const CertSection = styled.section`
max-width: 950px;
margin: 3rem auto 2rem auto;
background: var(--color-glass);
border-radius: 22px;
box-shadow: 0 6px 32px 0 rgba(255, 182, 233, 0.12);
padding: 2rem 2rem 2.5rem 2rem;
`;

const CertGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
gap: 2rem;
margin-top: 2rem;
`;

const CertItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: rgba(40,40,60,0.10);
border-radius: 16px;
padding: 1.2rem 1rem 1.2rem 1rem;
box-shadow: 0 2px 14px 0 #ffb6e930;
`;

const CertImg = styled.img`
max-width: 140px;
margin-bottom: 1rem;
border-radius: 7px;
box-shadow: 0 2px 10px 0 #ffb6e940;
`;

const CertTitle = styled.div`
font-size: 1rem;
color: #ffe2fa;
text-align: center;
font-weight: 500;
margin-bottom: 0.4rem;
`;

const CertDate = styled.div`
font-size: 0.93rem;
color: #e0cfff;
margin-bottom: 0.5rem;
`;

export default function Certifications() {
    return (
        <CertSection id="certifications">
        <h2>Certifications & Badges</h2>
        <CertGrid>
        <CertItem>
        <CertImg src="/introduction-to-cybersecurity.png" alt="Cisco Cybersecurity" />
        <CertTitle>Cisco Networking Academy: Introduction to Cybersecurity</CertTitle>
        <CertDate>2025</CertDate>
        </CertItem>
        <CertItem>
        <CertImg src="/JAVASCRIPTCERT.png" alt="freeCodeCamp JS Cert" />
        <CertTitle>freeCodeCamp: Legacy JavaScript Algorithms & Data Structures</CertTitle>
        <CertDate>June 5, 2025</CertDate>
        </CertItem>
        <CertItem>
        <CertImg src="/WEBDESIGNCERT.png" alt="freeCodeCamp Responsive Web Design" />
        <CertTitle>freeCodeCamp: Responsive Web Design</CertTitle>
        <CertDate>June 4, 2025</CertDate>
        </CertItem>
        <CertItem>
        <CertImg src="/CODINGCERT.png" alt="Codecademy Code Foundations" />
        <CertTitle>Codecademy: Code Foundations Skill Path</CertTitle>
        <CertDate>June 10, 2025</CertDate>
        </CertItem>
        </CertGrid>
        </CertSection>
    );
}
