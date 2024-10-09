import React from "react";
import styled from "styled-components";
import NotificationCard from "./NotificationCard";

const DropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 450px;
  max-height: 500px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 100;
`;

const NotificationDropdown = ({ notifications }) => {
  return (
    <DropdownContainer>
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          profilePic={notification.profilePic}
          channelName={notification.channelName}
          tags={notification.tags}
          thumbnail={notification.thumbnail}
          timestamp={notification.timestamp}
        />
      ))}
    </DropdownContainer>
  );
};

export default NotificationDropdown;
