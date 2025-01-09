import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #ffffff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ecf0f1;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  @media (min-width: 769px) {
  
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: #2c3e50;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0;
  }
`;

const NavLinkItem = styled.li`
  a {
    text-decoration: none;
    color: #ecf0f1;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      color: #1abc9c;
    }
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding: 10px;
        :hover {
            background: black;
        }
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #ecf0f1;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <NavbarContainer>
            <Logo>My Portfolio</Logo>
            <Hamburger onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </Hamburger>
            <NavLinks isOpen={isOpen} onClick={toggleMenu}>
                <NavLinkItem>
                    <Link to="/">Home</Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link to="/about">About Me</Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link to="/projects">Projects</Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link to="/blog">Blog</Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link to="/contact">Contact</Link>
                </NavLinkItem>
            </NavLinks>
        </NavbarContainer>
    );
};

export {Navbar};