import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsList from "./NotificationCard"; // Import NotificationsList correctly
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
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleVideoCallClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const notifications = [
    {
      notificationId: "1",
      profilePic: "path/to/profile1.jpg",
      channelName: "Channel 1",
      tags: "#cool #tech",
      thumbnail: "path/to/video1.jpg",
      timestamp: "2 days ago",
    },
    {
      notificationId: "2",
      profilePic: "path/to/profile2.jpg",
      channelName: "Channel 2",
      tags: "#funny #vlog",
      thumbnail: "path/to/video2.jpg",
      timestamp: "1 day ago",
    },
    // Add more notifications as needed
  ];

  const handleUploadClick = () => {
    handleClose();
    navigate("/content?upload=true");
  };

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
          onClick={handleVideoCallClick}
        />
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

        <NotificationsIcon onClick={handleNotificationClick} />
        {showNotifications && (
          <NotificationsList notifications={notifications} />
        )}
        <Avatar />
      </Icons>
    </Container>
  );
};

export default Navbar;
