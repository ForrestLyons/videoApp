// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { darkTheme, lightTheme } from "./utils/Theme";
import Shorts from "./pages/Shorts";
import Subscriptions from "./pages/Subscriptions";
import YouProfile from "./pages/YouProfile";
import YourChannel from "./pages/YourChannel";
import History from "./pages/History";
import Playlists from "./pages/Playlists";
import YourVideos from "./pages/YourVideos";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Dashboard from "./components/Dashboard"; // Import the Dashboard component

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/you" element={<YouProfile />} />
            <Route path="/yourchannel" element={<YourChannel />} />
            <Route path="/history" element={<History />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/yourvideos/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}

          </Route>
          <Route
            path="/yourvideos"
            element={
              <>
                <Navbar /> {/* Include the Navbar for YourVideos */}
                <YourVideos />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
