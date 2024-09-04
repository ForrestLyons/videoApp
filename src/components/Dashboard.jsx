// Dashboard.jsx
import React from "react";
import styled from "styled-components";
import SideMenu1 from "../components/SideMenu1"; // Import the SideMenu component

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const StatCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const VideoStats = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;


const Dashboard = () => {
  return (
    <Container>
       <SideMenu1 />
      <Section>
        <SectionTitle>Channel Analytics</SectionTitle>
        <StatCard>
          <StatItem>
            <StatValue>24.5K</StatValue>
            <StatLabel>Subscribers</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>1.2M</StatValue>
            <StatLabel>Views</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>350</StatValue>
            <StatLabel>Videos</StatLabel>
          </StatItem>
        </StatCard>
        <Graph />
      </Section>
      <Section>
        <SectionTitle>Latest Videos</SectionTitle>
        <VideoList>
          <VideoItem>
            <VideoInfo>
              <VideoTitle>How to Build a YouTube Clone</VideoTitle>
              <VideoStats>1.5K views • 2 days ago</VideoStats>
            </VideoInfo>
          </VideoItem>
          <VideoItem>
            <VideoInfo>
              <VideoTitle>Understanding React Hooks</VideoTitle>
              <VideoStats>3K views • 5 days ago</VideoStats>
            </VideoInfo>
          </VideoItem>
          {/* Add more VideoItems as needed */}
        </VideoList>
      </Section>
    </Container>
  );
};

export default Dashboard;
