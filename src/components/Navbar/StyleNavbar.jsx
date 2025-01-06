// Navbar.styles.js

import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #34495e;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const SearchContainer = styled.div`
  max-width: 300px;
  my-2;
  px-3;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 50px;
  align-items: center;
`;


export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
`;