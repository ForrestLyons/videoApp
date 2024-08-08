// Menu.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ShortsIcon from "@mui/icons-material/ShortText"; // Assuming Shorts Icon

const Container = styled.div`
  width: 240px;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 1000;
  padding-top: 20px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
`;

const HamburgerMenu = styled(MenuIcon)`
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 10px 0px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
`;

const CompactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px 0px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const SubscriptionItem = styled(Item)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const ShowMoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 0px;
  color: ${({ theme }) => theme.text};
`;

const MoreItem = styled(Item)`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const RedIcon = styled.div`
  color: red;
`;

const Footer = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CompactMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`;

const CompactMenuLabel = styled.div`
  font-size: 12px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const [showMore, setShowMore] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const subscriptions = [
    { name: "Channel 1", img: "/path/to/profile1.jpg" },
    { name: "Channel 2", img: "/path/to/profile2.jpg" },
    { name: "Channel 3", img: "/path/to/profile3.jpg" },
    { name: "Channel 4", img: "/path/to/profile4.jpg" },
    { name: "Channel 5", img: "/path/to/profile5.jpg" },
    { name: "Channel 6", img: "/path/to/profile6.jpg" },
    { name: "Channel 7", img: "/path/to/profile7.jpg" },
    { name: "Channel 8", img: "/path/to/profile8.jpg" },
    { name: "Channel 9", img: "/path/to/profile9.jpg" },
  ];

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <HamburgerMenu onClick={() => setIsCompact(!isCompact)} />
          <Logo>
            <img src="/path/to/logo.png" alt="logo" height="25px" />
            {!isCompact && "YouTube"}
          </Logo>
        </LogoContainer>

        {isCompact ? (
          <CompactMenuWrapper>
            <CompactItem>
              <HomeIcon />
              <CompactMenuLabel>Home</CompactMenuLabel>
            </CompactItem>
            <CompactItem>
              <ShortsIcon />
              <CompactMenuLabel>Shorts</CompactMenuLabel>
            </CompactItem>
            <CompactItem>
              <SubscriptionsIcon />
              <CompactMenuLabel>Subscriptions</CompactMenuLabel>
            </CompactItem>
            <CompactItem>
              <ExpandMoreIcon />
              <CompactMenuLabel>You</CompactMenuLabel>
            </CompactItem>
          </CompactMenuWrapper>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <HomeIcon />
                Home
              </Item>
            </Link>
            <Link to="/shorts" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <ShortsIcon />
                Shorts
              </Item>
            </Link>
            <Link to="/subscriptions" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <SubscriptionsIcon />
                Subscriptions
              </Item>
            </Link>

            <Link to="/you" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <ExpandMoreIcon />
                You
              </Item>
            </Link>
            <Link to="/yourchannel" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <AccountCircleIcon />
                Your Channel
              </Item>
            </Link>
            <Link to="/history" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <HistoryIcon />
                History
              </Item>
            </Link>
            <Link to="/playlists" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item>
                <PlaylistPlayIcon />
                Playlists
              </Item>
            </Link>
            <Link to="/yourvideos" style={{ textDecoration: "none", color: "inherit" }}>
              <Item>
                <VideoCameraBackIcon />
                Your Videos
              </Item>
            </Link>
            <Item>
              <WatchLaterIcon />
              Watch Later
            </Item>
            <Item>
              <ThumbUpIcon />
              Liked Videos
            </Item>
            <Hr />
            <Item onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Item>
            <Hr />
            <Title>Subscriptions</Title>
            {subscriptions.slice(0, showMore ? subscriptions.length : 7).map((subscription) => (
              <SubscriptionItem key={subscription.name}>
                <ProfileImg src={subscription.img} alt={subscription.name} />
                {subscription.name}
              </SubscriptionItem>
            ))}
            {subscriptions.length > 7 && (
              <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                <ArrowDropDownIcon />
                {showMore ? "Show Less" : "Show More"}
              </ShowMoreButton>
            )}
            <Hr />
            <Title>More from YouTube</Title>
            <MoreItem>
              <RedIcon>
                <YouTubeIcon />
              </RedIcon>
              YouTube Premium
            </MoreItem>
            <MoreItem>
              <RedIcon>
                <VideocamIcon />
              </RedIcon>
              YouTube Studio
            </MoreItem>
            <MoreItem>
              <RedIcon>
                <LiveTvIcon />
              </RedIcon>
              YouTube TV
            </MoreItem>
            <MoreItem>
              <RedIcon>
                <MusicNoteIcon />
              </RedIcon>
              YouTube Music
            </MoreItem>
            <MoreItem>
              <RedIcon>
                <ChildCareIcon />
              </RedIcon>
              YouTube Kids
            </MoreItem>
            <Hr />
            <MoreItem>
              <SettingsIcon />
              Settings
            </MoreItem>
            <MoreItem>
              <FlagIcon />
              Report History
            </MoreItem>
            <MoreItem>
              <HelpIcon />
              Help
            </MoreItem>
            <MoreItem>
              <FeedbackIcon />
              Send Feedback
            </MoreItem>
            <Hr />
            <Footer>
              AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
              TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
              NFL Sunday Ticket &copy; 2024 Google LLC
            </Footer>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Menu;
