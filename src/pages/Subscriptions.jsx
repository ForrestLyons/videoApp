// Subscriptions.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Category = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const Profiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const Profile = styled(Link)` // Use Link for navigation
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(20% - 20px);
  margin-bottom: 20px;
  text-decoration: none; // Remove underline for links
`;

const ProfileImage = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const FollowerCount = styled.div`
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10px;
`;

const ShowMoreButton = styled(Button)`
  margin-top: 20px;
`;

const Subscriptions = () => {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    {
      name: "Beauty and Fashion",
      profiles: [
        { name: "Channel1", followers: "1.2M", img: "/path/to/profile1.jpg" },
        { name: "Channel2", followers: "823K", img: "/path/to/profile2.jpg" },
        { name: "Channel3", followers: "300K", img: "/path/to/profile3.jpg" },
        { name: "Channel4", followers: "500K", img: "/path/to/profile4.jpg" },
        { name: "Channel5", followers: "1M", img: "/path/to/profile5.jpg" },
        { name: "Channel6", followers: "2M", img: "/path/to/profile6.jpg" },
        { name: "Channel7", followers: "1.2M", img: "/path/to/profile7.jpg" },
        { name: "Channel8", followers: "1.8M", img: "/path/to/profile8.jpg" },
        { name: "Channel9", followers: "900K", img: "/path/to/profile9.jpg" },
        { name: "Channel10", followers: "750K", img: "/path/to/profile10.jpg" },
      ],
    },
    // Add other categories similarly
  ];

  return (
    <Container>
      {categories.map((category, index) => (
        <Category key={index}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <Profiles>
            {category.profiles
              .slice(0, showMore ? category.profiles.length : 10)
              .map((profile, index) => (
                <Profile key={index} to={`/@${profile.name}`}> {/* Add dynamic path */}
                  <ProfileImage src={profile.img} alt={profile.name} />
                  <FollowerCount>{profile.followers}</FollowerCount>
                  <Button variant="contained" color="primary">
                    Subscribe
                  </Button>
                </Profile>
              ))}
          </Profiles>
          {category.profiles.length > 10 && (
            <ShowMoreButton onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </ShowMoreButton>
          )}
        </Category>
      ))}
    </Container>
  );
};

export default Subscriptions;
