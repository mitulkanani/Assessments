import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const SidebarHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ecf0f1;
  font-weight: 500;
  padding: 20px 0 0 20px;
  text-align: center;
`;

const SidebarOption = styled.div`
  font-size: 18px;
  margin: 5px 0;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#34495e" : "transparent")};
  &:hover {
    background-color: #34495e;
  }
  padding: 10px 20px;
  transition: background-color 0.3s ease;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isActiveTab, setIsActiveTab] = useState(0); // Tracks which tab is active

  const handleTabClick = (index) => {
    setIsActiveTab(index);
    toggleSidebar(); // Call the toggleSidebar function passed as prop
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeading>Favorite Projects</SidebarHeading>

      <SidebarLink to="/" onClick={() => { handleTabClick(0) }}>
        <SidebarOption isActive={isActiveTab === 0}>Project A</SidebarOption>
      </SidebarLink>

      <SidebarLink to="/EmptyProduct"  onClick={() => { handleTabClick(1) }}>
        <SidebarOption isActive={isActiveTab === 1}>Project B</SidebarOption>
      </SidebarLink>
    </SidebarContainer>
  );
};

// PropTypes definition
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Boolean indicating if the sidebar is open
  toggleSidebar: PropTypes.func.isRequired, // Function to toggle the sidebar
};

export default Sidebar;
