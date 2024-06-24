// Home.jsx
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 20px;
  overflow-x: hidden; // Prevent horizontal scrolling
`;

const Home = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 1",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 1",
      views: "1.4M",
      uploadTime: "2 days ago",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 2",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 2",
      views: "823K",
      uploadTime: "3 days ago",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 3",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 3",
      views: "300K",
      uploadTime: "1 day ago",
    },
    {
      id: 4,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 4",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 4",
      views: "500K",
      uploadTime: "4 days ago",
    },
    {
      id: 5,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 5",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 5",
      views: "1M",
      uploadTime: "5 days ago",
    },
    {
      id: 6,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 6",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 6",
      views: "2M",
      uploadTime: "6 days ago",
    },
    {
      id: 7,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 7",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 7",
      views: "1.2M",
      uploadTime: "7 days ago",
    },
    {
      id: 8,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 8",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 8",
      views: "1.8M",
      uploadTime: "8 days ago",
    },
    {
      id: 9,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 9",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 9",
      views: "900K",
      uploadTime: "9 days ago",
    },
    {
      id: 10,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 10",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 10",
      views: "750K",
      uploadTime: "10 days ago",
    },
    {
      id: 11,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 11",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 11",
      views: "620K",
      uploadTime: "11 days ago",
    },
    {
      id: 12,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 12",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 12",
      views: "1.1M",
      uploadTime: "12 days ago",
    },
    {
      id: 13,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 13",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 13",
      views: "800K",
      uploadTime: "13 days ago",
    },
    {
      id: 14,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 14",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 14",
      views: "450K",
      uploadTime: "14 days ago",
    },
    {
      id: 15,
      thumbnail: "https://via.placeholder.com/300x170",
      title: "Sample Video 15",
      channelImage: "https://via.placeholder.com/36",
      channelName: "Channel 15",
      views: "1.7M",
      uploadTime: "15 days ago",
    },
  ];

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
