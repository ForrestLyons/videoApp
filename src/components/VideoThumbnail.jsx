import React from "react";
import styled from "styled-components";

const ThumbnailContainer = styled.div`
  width: 150px;
  height: 100px;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const VideoThumbnail = () => {
  return (
    <ThumbnailContainer>
      <ThumbnailImage src="https://via.placeholder.com/150" alt="Video Thumbnail" />
    </ThumbnailContainer>
  );
};

export default VideoThumbnail;
