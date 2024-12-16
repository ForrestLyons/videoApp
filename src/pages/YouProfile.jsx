// YouProfile.jsx
import React from "react";
import styled from "styled-components";
import Avatar from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;
`;

const ProfileDetails = styled.div`
  margin-left: 20px;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.div`
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  && {
    border-radius: 20px;
    background-color: white;
    color: black;
    &:hover {
      background-color: ${({ theme }) => theme.bg};
      color: grey;
    }
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const VideoCards = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const VideoCard = styled.div`
  flex: 0 0 200px;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const VideoTitle = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-top: 10px;
`;

const VideoDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  text-align: center;
`;

const ShowMoreButton = styled(Button)`
  margin-top: 20px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
`;

const YouProfile = () => {
  const historyVideos = [
    { title: "History Video 1", thumbnail: "https://via.placeholder.com/200x120", channelName: "Channel 1", views: "1.2M", postDate: "2 weeks ago" },
    { title: "History Video 2", thumbnail: "https://via.placeholder.com/200x120", channelName: "Channel 2", views: "900K", postDate: "1 month ago" },
  ];

  const playlistsVideos = [
    { title: "Playlist Video 1", thumbnail: "https://via.placeholder.com/200x120", channelName: "Channel 3", views: "1.5M", postDate: "3 weeks ago" },
  ];

  const watchLaterVideos = [];

  const likedVideos = [
    { title: "Liked Video 1", thumbnail: "https://via.placeholder.com/200x120", channelName: "Channel 4", views: "2M", postDate: "1 day ago" },
  ];

  const renderVideos = (videos) => {
    if (videos.length === 0) {
      return <EmptyMessage>No videos available in this section.</EmptyMessage>;
    }

    return videos.map((video, index) => (
      <VideoCard key={index}>
        <VideoThumbnail src={video.thumbnail} alt={video.title} />
        <VideoTitle>{video.title}</VideoTitle>
        <VideoDetails>
          {video.channelName} • {video.views} views • {video.postDate}
        </VideoDetails>
      </VideoCard>
    ));
  };

  return (
    <Container>
      {/* Profile Section */}
      <ProfileSection>
        <Avatar style={{ width: "100px", height: "100px" }} />
        <ProfileDetails>
          <ProfileName>Your Name</ProfileName>
          <ChannelName>Your Channel Name • View Channel</ChannelName>
          <Buttons>
            <StyledButton variant="outlined">Switch Account</StyledButton>
            <StyledButton variant="contained" color="primary">
              Google Account
            </StyledButton>
          </Buttons>
        </ProfileDetails>
      </ProfileSection>

      {/* History Section */}
      <Section>
        <SectionTitle>History</SectionTitle>
        <VideoCards>
          {renderVideos(historyVideos)}
          {historyVideos.length > 0 && <ArrowForwardIcon style={{ cursor: "pointer" }} />}
        </VideoCards>
      </Section>

      {/* Playlists Section */}
      <Section>
        <SectionTitle>Playlists</SectionTitle>
        <VideoCards>
          {renderVideos(playlistsVideos)}
          {playlistsVideos.length > 0 && <ArrowForwardIcon style={{ cursor: "pointer" }} />}
        </VideoCards>
      </Section>

      {/* Watch Later Section */}
      <Section>
        <SectionTitle>Watch Later</SectionTitle>
        <VideoCards>
          {renderVideos(watchLaterVideos)}
          {watchLaterVideos.length > 0 && <ArrowForwardIcon style={{ cursor: "pointer" }} />}
        </VideoCards>
      </Section>

      {/* Liked Videos Section */}
      <Section>
        <SectionTitle>Liked Videos</SectionTitle>
        <VideoCards>
          {renderVideos(likedVideos)}
          {likedVideos.length > 0 && <ArrowForwardIcon style={{ cursor: "pointer" }} />}
        </VideoCards>
      </Section>

      <ShowMoreButton variant="contained" color="primary">
        Your Clips
      </ShowMoreButton>
    </Container>
  );
};

export default YouProfile;
