import React, { useState } from "react";
import styled from "styled-components";
import EligibilityProgress from "../components/EligibilityProgress";

// Styled components for layout
const EarnContainer = styled.div`
  margin-left: 220px; /* Adjust for SideMenu1 */
  padding: 20px;
`;

const NotificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const NotificationText = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 28px;
  margin-bottom: 20px;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.soft};
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${({ selected, theme }) =>
    selected ? `4px solid ${theme.primary}` : "none"};
  color: ${({ selected, theme }) => (selected ? theme.primary : theme.textSoft)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Graph = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
  margin-top: 20px;
`;

const SupportCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SupportTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const SupportLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const EarnPage = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <EarnContainer>
      <Header>Earn</Header>
      <TabsContainer>
        <Tab
          selected={selectedTab === "Overview"}
          onClick={() => setSelectedTab("Overview")}
        >
          Overview
        </Tab>
        <Tab
          selected={selectedTab === "Monetization"}
          onClick={() => setSelectedTab("Monetization")}
        >
          Monetization
        </Tab>
        <Tab
          selected={selectedTab === "Memberships"}
          onClick={() => setSelectedTab("Memberships")}
        >
          Memberships
        </Tab>
      </TabsContainer>

      {/* Earnings Overview Section */}
      {selectedTab === "Overview" && (
        <Section>
          <StatCard>
            <StatItem>
              <StatValue>$5,000</StatValue>
              <StatLabel>Total Revenue</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>$2,000</StatValue>
              <StatLabel>Ad Revenue</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>$1,000</StatValue>
              <StatLabel>Memberships</StatLabel>
            </StatItem>
          </StatCard>
          <Graph />
          <EligibilityProgress />
          <NotificationContainer>
            <NotificationText>Want to know when you're eligible?</NotificationText>
            <Button>Get notified</Button>
          </NotificationContainer>

          {/* Creator Support & Tools */}
          <SupportCard>
            <SupportTitle>Creator Support & Tools</SupportTitle>
            <SupportLink href="https://support.google.com/youtube/answer/3545535?hl=en" target="_blank">
              Chat & email support
            </SupportLink>
            <SupportLink href="https://support.google.com/youtube/answer/7648743?hl=en" target="_blank">
              Copyright Match Tool
            </SupportLink>
            <SupportLink href="https://support.google.com/youtube/answer/6388789?hl=en&ref_topic=9257785" target="_blank">
              External links in cards and end screens
            </SupportLink>
          </SupportCard>

          {/* Resources Section */}
          <SupportCard>
            <SupportTitle>Resources</SupportTitle>
            <SupportLink href="https://support.google.com/youtube?hl=en" target="_blank">
              Help Center
            </SupportLink>
            <SupportLink href="https://support.google.com/youtube/community?hl=en" target="_blank">
              Community forums
            </SupportLink>
            <SupportLink href="https://www.youtube.com/channel/UCkRfArvrzheW2E7b6SVT7vQ" target="_blank">
              YouTube Creators Channel
            </SupportLink>
            <SupportLink href="https://support.google.com/youtube/answer/1311392?hl=en" target="_blank">
              Channel monetization policies
            </SupportLink>
            <SupportLink href="https://support.google.com/youtube/answer/6162278?hl=en" target="_blank">
              Advertiser-friendly guidelines
            </SupportLink>
            <SupportLink href="https://support.google.com/youtube/answer/94522?hl=en&ref_topic=9257989" target="_blank">
              Other ways to earn
            </SupportLink>
          </SupportCard>
        </Section>
      )}
    </EarnContainer>
  );
};

export default EarnPage;
