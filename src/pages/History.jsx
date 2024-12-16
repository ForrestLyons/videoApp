// History.jsx
import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import PauseIcon from "@mui/icons-material/Pause";
import SettingsIcon from "@mui/icons-material/Settings";
import CommentIcon from "@mui/icons-material/Comment";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ChatIcon from "@mui/icons-material/Chat";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const VideoList = styled.div`
  margin-bottom: 40px;
`;

const DateHeader = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.textSoft};
  margin: 20px 0;
`;

const VideoCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Thumbnail = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
`;

const VideoInfo = styled.div`
  margin-left: 20px;
`;

const VideoTitle = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const VideoDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
`;

const Tags = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const Sidebar = styled.div`
  width: 300px;
  margin-left: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  padding: 5px 0;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  padding-left: 5px;
  flex: 1;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const SidebarText = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
`;

const History = () => {
  const [videos] = useState([
    {
      date: "Today",
      entries: [
        {
          title: "Today's Short 1",
          channel: "Channel 1",
          views: "1.2M views",
          tags: ["tag1", "tag2"],
          thumbnail: "https://via.placeholder.com/150",
        },
        {
          title: "Today's Short 2",
          channel: "Channel 2",
          views: "823K views",
          tags: ["tag3", "tag4"],
          thumbnail: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      date: "Yesterday",
      entries: [
        {
          title: "Video 3",
          channel: "Channel 3",
          views: "500K views",
          tags: ["tag5", "tag6"],
          thumbnail: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      date: "Older",
      entries: [
        {
          title: "Video 4",
          channel: "Channel 4",
          views: "2M views",
          tags: ["tag7", "tag8"],
          thumbnail: "https://via.placeholder.com/150",
        },
      ],
    },
  ]);

  return (
    <Container>
      <Content>
        <Title>Watch History</Title>
        {videos.map((videoGroup) => (
          <VideoList key={videoGroup.date}>
            <DateHeader>{videoGroup.date}</DateHeader>
            {videoGroup.entries.map((video, index) => (
              <VideoCard key={index}>
                <Thumbnail src={video.thumbnail} alt={video.title} />
                <VideoInfo>
                  <VideoTitle>{video.title}</VideoTitle>
                  <VideoDetails>
                    {video.channel} • {video.views}
                  </VideoDetails>
                  <Tags>{video.tags.join(", ")}</Tags>
                </VideoInfo>
              </VideoCard>
            ))}
          </VideoList>
        ))}
      </Content>
      <Sidebar>
        <SearchBar>
          <SearchIcon />
          <SearchInput placeholder="Search history" />
        </SearchBar>
        <SidebarItem>
          <DeleteIcon />
          <SidebarText>Clear all watch history</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <PauseIcon />
          <SidebarText>Pause watch history</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SettingsIcon />
          <SidebarText>Manage all history</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <CommentIcon />
          <SidebarText>Comments</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <PostAddIcon />
          <SidebarText>Posts</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <ChatIcon />
          <SidebarText>Live chat</SidebarText>
        </SidebarItem>
      </Sidebar>
    </Container>
  );
};

export default History;
