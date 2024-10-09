import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Menu, MenuItem } from "@mui/material"; // Ensure you import Menu and MenuItem from Material UI

import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  max-width: 600px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.textSoft};
  border-radius: 2px;
  padding: 5px 10px;
  margin: 0 20px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding-left: 5px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 20px;
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleVideoCallClick = (event) => {
    setAnchorEl(event.currentTarget); // Open dropdown menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close dropdown menu
  };

  const handleUploadClick = () => {
    handleClose();
    navigate("/content?upload=true");
   }; // Route to Content page with upload modal
  return (
    <Container>
      <Logo>
        <img src="/path/to/logo.png" alt="logo" height="25px" />
        YouTube
      </Logo>
      <Search>
        <Input placeholder="Search" />
        <SearchIcon />
      </Search>
      <Icons>
        <VideoCallIcon
        aria-controls="video-call-menu"
        aria-haspopup="true"
        onClick={handleVideoCallClick} />
        <Menu
          id="video-call-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleUploadClick}>Upload Video</MenuItem>
          <MenuItem onClick={handleClose}>Go Live</MenuItem>
          <MenuItem onClick={handleClose}>Create Post</MenuItem>
        </Menu>
        <AppsIcon />
        <NotificationsIcon />
        <Avatar />
      </Icons>
    </Container>
  );
};

export default Navbar;
