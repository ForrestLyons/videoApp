import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
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
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Menu from './components/Menu'; // Main menu
import SideMenu1 from './components/SideMenu1'; // Side menu for 'Your Videos'
import ContentPage from "./pages/ContentPage";
import AnalyticsPage from './pages/AnalyticsPage';
import CommentsPage from "./pages/CommentsPage";
import Subtitles from "./pages/Subtitles";  // Import the Subtitles page
import CopyrightPage from "./pages/CopyrightPage"; // Import the new CopyrightPage
import EarnPage from "./pages/EarnPage"; // Import the Earn page
import CustomizationPage from "./pages/CustomizationPage";
// New YourVideosLayout component
const YourVideosLayout = () => {
  return (
    <>
      <Navbar />
      <SideMenu1 />
      <Outlet />
    </>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <AppWithRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

// AppWithRouter is where we can use useLocation
const AppWithRouter = () => {
  const location = useLocation();

  // Define the paths where you want to hide the Menu
  const hideMenuRoutes = ["/yourvideos", "/yourvideos/dashboard", "/yourvideos/content", "/yourvideos/analytics", "/yourvideos/comments"];
  const shouldHideMenu = hideMenuRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {/* Conditionally render the Menu */}
      {!shouldHideMenu && <Menu />}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/shorts/:id" element={<Shorts />} />

          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/you" element={<YouProfile />} />
          <Route path="/yourchannel" element={<YourChannel />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/content" element={<ContentPage />} />

        </Route>

        {/* Your Videos Section */}
        <Route path="/yourvideos" element={<YourVideosLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="comments" element={<CommentsPage />} />
          <Route path="subtitles" element={<Subtitles />} />
          <Route path="copyright" element={<CopyrightPage />} />
          <Route path="earn" element={<EarnPage />} />
          <Route path="customization" element={<CustomizationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
