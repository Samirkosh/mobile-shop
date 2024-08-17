import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Mobile</h1>
      <nav>
        <StyledNavLink to={"/about"}>About</StyledNavLink>
        <StyledNavLink to={"/phones"}>Phones</StyledNavLink>
        <StyledNavLink to={"/profile"}>Profile</StyledNavLink>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #007bff;
    color: #fff;
  }

  &:hover {
    background-color: #e2e6ea;
  }
`;
