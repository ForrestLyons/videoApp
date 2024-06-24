// Shorts.jsx
import React, { useState } from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DescriptionIcon from "@mui/icons-material/Description";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import BlockIcon from "@mui/icons-material/Block";
import FlagIcon from "@mui/icons-material/Flag";
import FeedbackIcon from "@mui/icons-material/Feedback";
import Avatar from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const VideoCard = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const Video = styled.div`
  width: 100%;
  height: 400px;
  background-color: #000;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ActionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const MoreOptions = styled.div`
  position: relative;
`;

const MoreOptionsButton = styled(MoreVertIcon)`
  cursor: pointer;
`;

const MoreOptionsMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 1000;
`;

const MoreOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ProfileImage = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const Shorts = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleMoreOptionsToggle = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <Container>
      <VideoCard>
        <Video />
        <Actions>
          <ActionButton>
            <ThumbUpIcon />
            <div>123</div>
          </ActionButton>
          <ActionButton>
            <ThumbDownIcon />
            <div>Dislike</div>
          </ActionButton>
          <ActionButton>
            <CommentIcon />
            <div>45</div>
          </ActionButton>
          <ActionButton>
            <ShareIcon />
            <div>Share</div>
          </ActionButton>
          <MoreOptions>
            <MoreOptionsButton onClick={handleMoreOptionsToggle} />
            <MoreOptionsMenu show={showMoreOptions}>
              <MoreOption>
                <DescriptionIcon />
                <div>Description</div>
              </MoreOption>
              <MoreOption>
                <PlaylistAddIcon />
                <div>Save to Playlist</div>
              </MoreOption>
              <MoreOption>
                <ClosedCaptionIcon />
                <div>Captions</div>
              </MoreOption>
              <MoreOption>
                <BlockIcon />
                <div>Don't Recommend this Channel</div>
              </MoreOption>
              <MoreOption>
                <FlagIcon />
                <div>Report</div>
              </MoreOption>
              <MoreOption>
                <FeedbackIcon />
                <div>Send Feedback</div>
              </MoreOption>
            </MoreOptionsMenu>
          </MoreOptions>
        </Actions>
        <Profile>
          <ProfileImage />
          <ProfileName>Channel Name</ProfileName>
        </Profile>
      </VideoCard>
    </Container>
  );
};

export default Shorts;
