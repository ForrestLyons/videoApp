import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const SortBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
`;

const SortText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-right: 5px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

const VideoCard = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
`;

const VideoDetails = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

const VideoTitle = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const ChannelDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const Progress = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin-top: 10px;
`;

const WatchLater = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Manual");

  const watchLaterVideos = [
    {
      id: 1,
      title: "How to Build a React App",
      channel: "Code Academy",
      thumbnail: "https://via.placeholder.com/200x120",
      progress: "50%",
      dateAdded: "2023-12-15",
      datePublished: "2023-10-01",
      views: "1.2M",
    },
    {
      id: 2,
      title: "Learn Node.js in 1 Hour",
      channel: "Node Ninja",
      thumbnail: "https://via.placeholder.com/200x120",
      progress: "75%",
      dateAdded: "2023-12-14",
      datePublished: "2023-09-25",
      views: "2.3M",
    },
    {
      id: 3,
      title: "Understanding JavaScript Closures",
      channel: "JS Explained",
      thumbnail: "https://via.placeholder.com/200x120",
      progress: "30%",
      dateAdded: "2023-12-10",
      datePublished: "2023-11-01",
      views: "500K",
    },
  ];

  const sortOptions = [
    "Manual",
    "Date Added (Newest)",
    "Date Added (Oldest)",
    "Most Popular",
    "Date Published (Newest)",
    "Date Published (Oldest)",
  ];

  const sortLogic = (videos, option) => {
    switch (option) {
      case "Date Added (Newest)":
        return videos.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      case "Date Added (Oldest)":
        return videos.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
      case "Most Popular":
        return videos.sort((a, b) => parseInt(b.views.replace(/M|K/, "")) - parseInt(a.views.replace(/M|K/, "")));
      case "Date Published (Newest)":
        return videos.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
      case "Date Published (Oldest)":
        return videos.sort((a, b) => new Date(a.datePublished) - new Date(b.datePublished));
      default:
        return videos; // Manual or default
    }
  };

  const sortedVideos = sortLogic([...watchLaterVideos], sortOption);

  return (
    <Container>
      <Title>Watch Later</Title>
      <SortBar onClick={() => setDropdownOpen(!dropdownOpen)}>
        <SortText>{sortOption}</SortText>
        <ArrowDropDownIcon />
        <DropdownMenu open={dropdownOpen}>
          {sortOptions.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                setSortOption(option);
                setDropdownOpen(false);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </SortBar>
      <VideoList>
        {sortedVideos.map((video) => (
          <VideoCard key={video.id}>
            <Thumbnail src={video.thumbnail} alt={video.title} />
            <VideoDetails>
              <VideoTitle>{video.title}</VideoTitle>
              <ChannelDetails>
                {video.channel} • {video.views} views
              </ChannelDetails>
              <Progress>Progress: {video.progress}</Progress>
            </VideoDetails>
          </VideoCard>
        ))}
      </VideoList>
    </Container>
  );
};

export default WatchLater;
