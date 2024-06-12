import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 170px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} style={{ textDecoration: "none" }}>
      <Container>
        <Thumbnail src={video.thumbnail} alt="thumbnail" />
        <Details>
          <ChannelImage src={video.channelImage} alt="channel" />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{video.channelName}</ChannelName>
            <Info>{video.views} views • {video.uploadTime}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
