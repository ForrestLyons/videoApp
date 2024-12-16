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

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
`;

const FilterText = styled.div`
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

const PlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const PlaylistCardWrapper = styled.div`
  flex: 0 0 calc(25% - 15px);
  margin-bottom: 20px;
  position: relative;
`;

const PlaylistCard = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgLighter};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;

const StackedThumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2px 5px;
  border-radius: 5px;
`;

const PlaylistInfo = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const PlaylistTitle = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const PlaylistDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const ViewFullPlaylist = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NoVideoMessage = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  text-align: center;
  margin-top: 20px;
`;

const Playlists = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("Recently Added");

  const playlists = [
    {
      title: "Liked Videos",
      videos: 42,
      privacy: "Private",
      image: "https://via.placeholder.com/250x140",
    },
    {
      title: "Favorites",
      videos: 30,
      privacy: "Public",
      image: "https://via.placeholder.com/250x140",
    },
    {
      title: "Watch Later",
      videos: 25,
      privacy: "Private",
      image: "https://via.placeholder.com/250x140",
    },
    {
      title: "Music",
      videos: 0,
      privacy: "Public",
      image: "https://via.placeholder.com/250x140",
    },
  ];

  const filteredPlaylists = playlists.filter((playlist) =>
    filter === "Recently Added"
      ? true
      : playlist.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Playlists</Title>
      <FilterBar onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FilterText>{filter}</FilterText>
        <ArrowDropDownIcon />
        <DropdownMenu open={dropdownOpen}>
          <DropdownItem onClick={() => setFilter("Recently Added")}>
            Recently Added
          </DropdownItem>
          <DropdownItem onClick={() => setFilter("A-Z")}>A-Z</DropdownItem>
        </DropdownMenu>
      </FilterBar>
      <PlaylistContainer>
        {filteredPlaylists.map((playlist, index) => (
          <PlaylistCardWrapper key={index}>
            <PlaylistCard>
              <StackedThumbnail image={playlist.image}>
                <Overlay>{playlist.videos} videos</Overlay>
              </StackedThumbnail>
            </PlaylistCard>
            <PlaylistInfo>
              <PlaylistTitle>{playlist.title}</PlaylistTitle>
              <PlaylistDetails>
                {playlist.privacy} • Playlist
              </PlaylistDetails>
              {playlist.videos === 0 ? (
                <NoVideoMessage>No videos in this playlist</NoVideoMessage>
              ) : (
                <ViewFullPlaylist>View full playlist</ViewFullPlaylist>
              )}
            </PlaylistInfo>
          </PlaylistCardWrapper>
        ))}
      </PlaylistContainer>
    </Container>
  );
};

export default Playlists;
