import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const CustomizationContainer = styled.div`
  margin-left: 220px; /* Adjust for SideMenu1 */
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme?.bgLighter || "#f1f1f1"};
  padding: 20px;
  border-bottom: 2px solid ${({ theme }) => theme?.soft || "#ddd"};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${({ selected, theme }) =>
    selected ? `4px solid ${theme?.primary || "#3ea6ff"}` : "none"};
  color: ${({ selected, theme }) => (selected ? theme?.primary || "#3ea6ff" : theme?.textSoft || "#999")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme?.soft || "#ddd" : theme?.primary || "#3ea6ff"};
color: ${({ disabled, theme }) => (disabled ? theme?.textSoft || "#999" : "white")};  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme?.soft || "#ddd" : theme?.primaryDark || "#357abd"};
  }
`;

const CustomizationPage = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");

  return (
    <CustomizationContainer>
      {/* Sticky Header */}
      <HeaderContainer>
        <TabContainer>
          <Tab
            selected={selectedTab === "Profile"}
            onClick={() => setSelectedTab("Profile")}
          >
            Profile
          </Tab>
          <Tab
            selected={selectedTab === "Home Tab"}
            onClick={() => setSelectedTab("Home Tab")}
          >
            Home Tab
          </Tab>
        </TabContainer>

        {/* Action Buttons */}
        <ButtonContainer>
          <Button>View Channel</Button>
          <Button disabled>Cancel</Button>
          <Button disabled>Publish</Button>
        </ButtonContainer>
      </HeaderContainer>

      {/* Content based on selected tab */}
      {selectedTab === "Profile" && (
        <div>
          <h2>Profile Customization</h2>
          {/* Add content for profile customization here */}
        </div>
      )}

      {selectedTab === "Home Tab" && (
        <div>
          <h2>Home Tab Customization</h2>
          {/* Add content for home tab customization here */}
        </div>
      )}
    </CustomizationContainer>
  );
};

export default CustomizationPage;
