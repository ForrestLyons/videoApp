// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { darkTheme, lightTheme } from "./utils/Theme";
import Shorts from "./pages/Shorts"; // Import the Shorts component

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

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/video/:id" element={<Video />} />
                <Route path="/shorts" element={<Shorts />} />
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
