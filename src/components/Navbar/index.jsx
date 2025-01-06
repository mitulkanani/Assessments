import styled from 'styled-components';
import PropTypes from 'prop-types';
const NavbarContainer = styled.div`
  background-color: #34495e;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavbarContainer>
      <NavbarTitle>My App</NavbarTitle>
      <HamburgerIcon onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </HamburgerIcon>
    </NavbarContainer>
  );
};


Navbar.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
};

export default Navbar;
