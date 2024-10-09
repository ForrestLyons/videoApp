import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EyeOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import BlockIcon from "@mui/icons-material/Block";

const NotificationsContainer = styled.div`
  width: 420px;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: -250px;
`;

const NotificationsHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  padding-bottom: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  cursor: pointer;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const VideoDetails = styled.div`
  flex-grow: 1;
`;

const VideoTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 40px;
  margin-left: 10px;
`;

const MoreOptionsIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
  position: relative;
`;

const OptionsDropdown = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  width: 250px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  overflow: auto;
`;

const OptionItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const NotificationCard = ({ profilePic, channelName, tags, thumbnail, timestamp, notificationId }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMoreClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  return (
    <Link to={`/shorts/${notificationId}`} style={{ textDecoration: "none" }}>
      <CardContainer>
        <ProfilePic src={profilePic} alt="Channel profile" />
        <VideoDetails>
          <VideoTitle>
            For you: {channelName} {tags}
          </VideoTitle>
          <Timestamp>{timestamp}</Timestamp>
        </VideoDetails>
        <Thumbnail src={thumbnail} alt="Video thumbnail" />
        <MoreOptionsIcon onClick={handleMoreClick}>
          <MoreVertIcon />
          {showOptions && (
            <OptionsDropdown>
              <OptionItem>
                <EyeOffIcon style={{ marginRight: "10px" }} /> Hide this notification
              </OptionItem>
              <OptionItem>
                <BlockIcon style={{ marginRight: "10px" }} /> Hide notifications from this channel
              </OptionItem>
              <OptionItem>
                <NotificationsOffIcon style={{ marginRight: "10px" }} /> Turn off all recommendation notifications
              </OptionItem>
            </OptionsDropdown>
          )}
        </MoreOptionsIcon>
      </CardContainer>
    </Link>
  );
};

const NotificationsList = ({ notifications }) => {
  return (
    <NotificationsContainer>
      <NotificationsHeader>Notifications</NotificationsHeader>
      {notifications.map((notification) => (
        <NotificationCard key={notification.notificationId} {...notification} />
      ))}
    </NotificationsContainer>
  );
};

export default NotificationsList;
