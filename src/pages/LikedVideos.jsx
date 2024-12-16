import React, { useState } from "react";
import styled from "styled-components";

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

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.primary : theme.bgLighter};
  color: ${({ active, theme }) => (active ? "white" : theme.text)};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
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

const LikedVideos = () => {
  const [filter, setFilter] = useState("All"); // Options: All, Videos, Shorts

  const likedContent = [
    {
      id: 1,
      type: "Video", // Can be 'Video' or 'Short'
      title: "How to Learn React",
      channel: "React Academy",
      thumbnail: "https://via.placeholder.com/200x120",
      dateLiked: "2023-12-15",
      views: "1.2M",
    },
    {
      id: 2,
      type: "Short", // Short video
      title: "Quick Tips for JavaScript",
      channel: "JS Shorts",
      thumbnail: "https://via.placeholder.com/200x120",
      dateLiked: "2023-12-14",
      views: "500K",
    },
    {
      id: 3,
      type: "Video",
      title: "Learn CSS Grid in 10 Minutes",
      channel: "Design Basics",
      thumbnail: "https://via.placeholder.com/200x120",
      dateLiked: "2023-12-13",
      views: "800K",
    },
    {
      id: 4,
      type: "Short",
      title: "Debugging in Chrome DevTools",
      channel: "Debug Mastery",
      thumbnail: "https://via.placeholder.com/200x120",
      dateLiked: "2023-12-12",
      views: "400K",
    },
  ];

  const filteredContent =
    filter === "All"
      ? likedContent
      : likedContent.filter((content) => content.type === filter);

  return (
    <Container>
      <Title>Liked Videos</Title>
      <FilterButtons>
        <FilterButton
          active={filter === "All"}
          onClick={() => setFilter("All")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "Video"}
          onClick={() => setFilter("Video")}
        >
          Videos
        </FilterButton>
        <FilterButton
          active={filter === "Short"}
          onClick={() => setFilter("Short")}
        >
          Shorts
        </FilterButton>
      </FilterButtons>
      <VideoList>
        {filteredContent.map((content) => (
          <VideoCard key={content.id}>
            <Thumbnail src={content.thumbnail} alt={content.title} />
            <VideoDetails>
              <VideoTitle>{content.title}</VideoTitle>
              <ChannelDetails>
                {content.channel} • {content.views} views • Liked on{" "}
                {content.dateLiked}
              </ChannelDetails>
            </VideoDetails>
          </VideoCard>
        ))}
      </VideoList>
    </Container>
  );
};

export default LikedVideos;
