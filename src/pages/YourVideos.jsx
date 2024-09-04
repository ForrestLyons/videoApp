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
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Submenu from "../components/Submenu"; // Import the Submenu component
import { useNavigate } from "react-router-dom"; // Add this import
import SideMenu1 from "../components/SideMenu1";
const Container = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  width: ${({ collapsed }) => (collapsed ? "60px" : "200px")}; /* Adjust width when collapsed */
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
  margin-left: ${({ collapsed }) => (collapsed ? "80px" : "220px")}; /* Adjust margin-left */
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

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  margin-right: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const FilterDropdown = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
`;

const VideoOptionsSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
`;

const CheckBox = styled(CheckBoxOutlineBlankIcon)`
  margin-right: 10px;
  cursor: pointer;

`;

const Option = styled.div`
  margin-right: 20px;
  color: ${({ theme }) => theme.text};
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.soft};
  flex: 1;
`;

const NoVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const NoVideosImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const NoVideosText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const YourVideos = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container>
      <Content>
      <SideMenu1/>

        <ProfileSection collapsed={collapsed}>
          <ProfilePicture>A</ProfilePicture> {/* Initial for profile */}
          <ChannelName>Your Channel</ChannelName>
          <ProfileName>Your Name</ProfileName>
        </ProfileSection>

        <Submenu /> {/* Add the Submenu at the top */}
        <h1>Your Videos</h1>

        {/* Filter Section */}
        <FilterSection>
          <FilterButton>
            <FilterListIcon />
            <span>Filter Categories</span>
          </FilterButton>
          <FilterDropdown>
            <option value="" disabled selected>
              Filter
            </option>
            <option value="age-restriction">Age Restriction</option>
            <option value="copyright">Copyright</option>
            <option value="description">Description</option>
            <option value="made-for-kids">Made for Kids</option>
            <option value="title">Title</option>
            <option value="views">Views</option>
            <option value="visibility">Visibility</option>
          </FilterDropdown>
        </FilterSection>

        {/* Video Options Section */}
        <VideoOptionsSection>
          <CheckBox />
          <Option>Video Restrictions</Option>
          <HorizontalLine />
          <Option>Date</Option>
          <Option>Views</Option>
          <Option>Comments</Option>
          <Option>Likes/Dislikes</Option>
        </VideoOptionsSection>

        {/* No Videos Section */}
        <NoVideosSection>
          <NoVideosImage /> {/* Placeholder for image */}
          <NoVideosText>No videos uploaded yet</NoVideosText>
          <UploadButton>Upload Videos</UploadButton>
        </NoVideosSection>

      </Content>
    </Container>
  );
};

export default YourVideos;
