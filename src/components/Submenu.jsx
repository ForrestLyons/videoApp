// Submenu.js
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.text};
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.text};
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.textSoft};
  }
`;

const Submenu = () => {
  return (
    <Container>
      <Title>Channel Content</Title>
      <Links>
        <Link to="/yourvideos/videos" activeClassName="active">Videos</Link>
        <Link to="/yourvideos/shorts" activeClassName="active">Shorts</Link>
        <Link to="/yourvideos/live" activeClassName="active">Live</Link>
        <Link to="/yourvideos/posts" activeClassName="active">Posts</Link>
        <Link to="/yourvideos/playlists" activeClassName="active">Playlists</Link>
        <Link to="/yourvideos/podcasts" activeClassName="active">Podcasts</Link>
        <Link to="/yourvideos/promotions" activeClassName="active">Promotions</Link>
      </Links>
    </Container>
  );
};

export default Submenu;
