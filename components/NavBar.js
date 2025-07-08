"use client";
import styled from "styled-components";

const Nav = styled.nav`
position: sticky;
top: 0;
z-index: 100;
backdrop-filter: blur(16px);
background: rgba(30, 24, 38, 0.85);
box-shadow: 0 2px 14px #ffb6e935;
padding: 0.3rem 0;
display: flex;
justify-content: center;
gap: 2.5rem;
border-bottom: 1.5px solid #ffb6e928;
`;

const NavLink = styled.a`
color: #ffe2fa;
font-family: "Quicksand", "DM Sans", sans-serif;
font-weight: 600;
letter-spacing: 1px;
text-decoration: none;
font-size: 1.12rem;
padding: 0.4rem 1rem;
border-radius: 999px;
transition: background 0.16s, color 0.16s;
&:hover {
    background: #ffb6e928;
    color: #ffb6e9;
}
`;

export default function NavBar() {
    return (
        <Nav>
        <NavLink href="#hero">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#certifications">Certs</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        </Nav>
    );
}
