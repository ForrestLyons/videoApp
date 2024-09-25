// Subtitles.jsx
import React, { useState } from "react";
import styled from "styled-components";
import VideoThumbnail from "../components/VideoThumbnail"; // Corrected import path

// Styling for the tabs
const TabsContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.soft};
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? theme.primary : theme.textSoft)};
  border-bottom: ${({ selected, theme }) => (selected ? `2px solid ${theme.primary}` : "none")};
`;

const SubtitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* Add margin-left to push content to the right */
  margin-left: 220px; /* Adjust this value to match the width of SideMenu1 */
`;

const VideoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  margin-bottom: 10px;
  border-radius: 8px;
  align-items: center;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const Languages = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const LastModified = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Subtitles = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Drafts", "Published"];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SubtitlesContainer>
      {/* Tab Selection */}
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            selected={selectedTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      {/* Videos List */}
      <VideoRow>
        <VideoThumbnail />
        <VideoInfo>
          <VideoTitle>Example Video Title</VideoTitle>
          <Languages>Languages: 2</Languages>
          <LastModified>Modified on: Sep 16, 2024</LastModified>
        </VideoInfo>
      </VideoRow>

      {/* Add more VideoRow components as needed */}
    </SubtitlesContainer>
  );
};

export default Subtitles;
