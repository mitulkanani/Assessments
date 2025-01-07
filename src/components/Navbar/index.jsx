import PropTypes from "prop-types";
import { Avatar, IconButton, InputBase } from "@mui/material";
import { ChevronLeft, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  FlexContainer,
  HamburgerIcon,
  NavbarContainer,
  SearchContainer,
} from "./StyleNavbar";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();

  const isProjectDetailPage = location.pathname.includes("projectDetail");

  return (
    <NavbarContainer className={`flex justify-between`}>
      {isProjectDetailPage && (
        <ChevronLeft
          onClick={() => window.history.back()}
          className="cursor-pointer absolute left-5"
        />
      )}
      <FlexContainer>
        <SearchContainer>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search className="h-4 w-4" />
          </IconButton>
        </SearchContainer>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </FlexContainer>
      <HamburgerIcon onClick={toggleSidebar}>&#9776;</HamburgerIcon>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
};

export default Navbar;
