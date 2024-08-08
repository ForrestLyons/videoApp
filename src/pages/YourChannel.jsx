// YourChannel.jsx
import React from "react";
import styled from "styled-components";
import Avatar from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";

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

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

const NavButton = styled(Button)`
  && {
    border-radius: 0;
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.bgLighter};
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.textSoft};
  border-radius: 5px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  padding: 5px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const NoContentIcon = styled.div`
  font-size: 100px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
`;

const NoContentText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.textSoft};
  text-align: center;
  margin-bottom: 20px;
`;

const CreateButton = styled(Button)`
  && {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.bg};
    }
  }
`;

const YourChannel = () => {
  const videos = []; // Array of uploaded videos, empty if none

  return (
    <Container>
      <ProfileSection>
        <Avatar style={{ width: "100px", height: "100px" }} />
        <ProfileDetails>
          <ProfileName>Your Name</ProfileName>
          <ChannelName>Your Channel Name • View Channel</ChannelName>
          <Buttons>
            <StyledButton variant="contained">Customize Channel</StyledButton>
            <StyledButton variant="contained">Manage Videos</StyledButton>
          </Buttons>
        </ProfileDetails>
      </ProfileSection>
      <NavBar>
        <NavButton startIcon={<HomeIcon />}>Home</NavButton>
        <NavButton startIcon={<PlaylistPlayIcon />}>Playlists</NavButton>
        <NavButton startIcon={<GroupIcon />}>Community</NavButton>
        <SearchBar>
          <SearchIcon />
          <SearchInput placeholder="Search" />
        </SearchBar>
      </NavBar>
      <ContentSection>
        {videos.length === 0 ? (
          <NoContent>
            <NoContentIcon>🎬</NoContentIcon>
            <NoContentText>
              Create content at home or on the go. Any content you create will appear here.
            </NoContentText>
            <CreateButton variant="contained">Create</CreateButton>
          </NoContent>
        ) : (
          // Map through videos and display them here
          <div>Uploaded Videos</div>
        )}
      </ContentSection>
    </Container>
  );
};

export default YourChannel;
