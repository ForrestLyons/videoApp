// MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
`;

const Main = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  margin-left: 240px; // Leave space for the fixed Menu
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Wrapper = styled.div`
  padding: 22px 20px;
  @media (max-width: 1024px) {
    padding: 10px 10px;
  }
`;

const MainLayout = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const isYourVideosPage = location.pathname === "/yourvideos";

  return (
    <Container>
      {!isYourVideosPage && <Menu darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Main style={{ marginLeft: isYourVideosPage ? "0" : "240px" }}>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Main>
    </Container>
  );
};

export default MainLayout;
