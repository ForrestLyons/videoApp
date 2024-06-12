import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({ theme }) => theme.bgLighter};
height: 56px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
z-index: 1000;
`;

const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
margin: 0 auto;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 30px;
  width: 100%;
  padding: 5px 10px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const MicButton = styled(MicIcon)`
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NotificationCounter = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 10px;
`;

const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 20px;
`;

const ArrowButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;


 const Category = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.lightBg};
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
  }
  &.selected {
    background-color: ${({ theme }) => theme.selectedBg};
    color: ${({ theme }) => theme.selectedText};
  }
`;

const Navbar = () => {
  const categories = ["All", "Music", "Sports", "Gaming", "News", "Movies", "TV Shows", "Live", "Fashion", "Learning", "360° Video", "Travel", "Food", "Technology", "Cars", "Pets"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Container>
        <SearchContainer>
          <SearchBar>
            <Input placeholder="Search" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBar>
          <MicButton />
        </SearchContainer>
        <RightIcons>
          <IconWrapper>
            <VideoCallIcon />
          </IconWrapper>
          <IconWrapper>
            <NotificationsIcon />
            <NotificationCounter>9+</NotificationCounter>
          </IconWrapper>
          <ProfileIcon>A</ProfileIcon>
        </RightIcons>
      </Container>
      <CategoriesContainer>
        <ArrowButton>
          <ArrowBackIosIcon />
        </ArrowButton>
        <Categories>
          {categories.map((category) => (
            <Category
              key={category}
              className={selectedCategory === category ? "selected" : ""}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Category>
          ))}
        </Categories>
        <ArrowButton>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </CategoriesContainer>
    </>
  );
};

export default Navbar;
