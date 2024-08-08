// YourVideos.jsx
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CommentIcon from "@mui/icons-material/Comment";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BuildIcon from "@mui/icons-material/Build";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import Submenu from "../components/Submenu"; // Import the Submenu component

const Container = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  width: ${({ collapsed }) => (collapsed ? "60px" : "240px")};
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  border-right: 1px solid ${({ theme }) => theme.soft};
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 1000;
  transition: width 0.3s ease;
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  display: ${({ collapsed }) => (collapsed ? "none" : "block")};
`;

const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${({ theme }) => theme.textSoft};
  margin: 0 auto 10px auto;
`;

const ProfileName = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const MenuIconWrapper = styled.div`
  margin-right: ${({ collapsed }) => (collapsed ? "0" : "15px")};
`;

const MenuText = styled.div`
  display: ${({ collapsed }) => (collapsed ? "none" : "block")};
  transition: opacity 0.3s ease;
  opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
`;

const Content = styled.div`
  flex: 1;
  margin-left: ${({ collapsed }) => (collapsed ? "60px" : "240px")}; /* Adjust for sidebar */
  padding: 20px;
  transition: margin-left 0.3s ease;
`;

const CollapseButton = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  width: 100%;
`;

const YourVideos = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container>
      <SideMenu collapsed={collapsed}>
        <CollapseButton collapsed={collapsed} onClick={toggleCollapse}>
          <MenuIcon />
        </CollapseButton>
        <ProfileSection collapsed={collapsed}>
          <ProfilePicture>A</ProfilePicture> {/* Initial for profile */}
          <ChannelName>Your Channel</ChannelName>
          <ProfileName>Your Name</ProfileName>
        </ProfileSection>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <DashboardIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Dashboard</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <VideoLibraryIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Content</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <AnalyticsIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Analytics</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <CommentIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Comments</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <SubtitlesIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Subtitles</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <CopyrightIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Copyright</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <MonetizationOnIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Earn</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <BuildIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Customization</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <AudiotrackIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Audio Library</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <SettingsIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Settings</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIconWrapper collapsed={collapsed}>
            <FeedbackIcon />
          </MenuIconWrapper>
          <MenuText collapsed={collapsed}>Send Feedback</MenuText>
        </MenuItem>
      </SideMenu>
      <Content collapsed={collapsed}>
        <Submenu /> {/* Add the Submenu at the top */}
        <h1>Your Videos</h1>
        {/* Add content management functionality here */}
      </Content>
    </Container>
  );
};

export default YourVideos;
