import React, { useState } from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Container for the whole page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 220px;
`;

// Layout for the chart and real-time stats
const ChartSection = styled.div`
  display: flex;
  gap: 20px; /* Space between the chart and real-time stats */
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.text : theme.textSoft)};
  border-bottom: ${({ active, theme }) => (active ? `2px solid ${theme.primary}` : "none")};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const TabContent = styled.div`
  margin-top: 20px;
`;

const TimePickerContainer = styled.div`
  position: relative;
`;

const DropdownTrigger = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const DropdownText = styled.span`
  color: ${({ theme }) => theme.text};
`;

const DropdownIcon = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 8px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Metrics = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const MetricCard = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  margin-right: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  &:last-child {
    margin-right: 0;
  }
`;

const MetricTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10px;
`;

const MetricValue = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const GraphContainer = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  height: 400px;
  flex: 2;
`;

const RealTimeStats = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StatItem = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 5px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const SeeMoreButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const Insights = styled.div`
  margin-top: 30px;
`;

const InsightTitle = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const InsightText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

// Dummy data for graphs
const data = [
  { name: 'Mon', views: 2400, watchTime: 2400, subscribers: 50 },
  { name: 'Tue', views: 1398, watchTime: 2210, subscribers: 30 },
  { name: 'Wed', views: 9800, watchTime: 2290, subscribers: 40 },
  { name: 'Thu', views: 3908, watchTime: 2000, subscribers: 35 },
  { name: 'Fri', views: 4800, watchTime: 2181, subscribers: 45 },
  { name: 'Sat', views: 3800, watchTime: 2500, subscribers: 20 },
  { name: 'Sun', views: 4300, watchTime: 2100, subscribers: 25 },
];

const AnalyticsPage = () => {
  const [activeTab, setActiveTab] = useState("views");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 28 days");

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectRange = (range) => {
    setSelectedRange(range);
    setShowDropdown(false);
  };

  const renderChart = () => {
    let dataKey = "";
    let chartTitle = "";

    switch (activeTab) {
      case "views":
        dataKey = "views";
        chartTitle = "Views";
        break;
      case "watchTime":
        dataKey = "watchTime";
        chartTitle = "Watch Time (Hours)";
        break;
      case "subscribers":
        dataKey = "subscribers";
        chartTitle = "Subscribers";
        break;
      default:
        dataKey = "views";
        chartTitle = "Views";
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Container>
      <Title>Channel Analytics</Title>

      {/* Tabs for selecting the metric */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TabsContainer>
          <Tab active={activeTab === "views"} onClick={() => setActiveTab("views")}>
            Views
          </Tab>
          <Tab active={activeTab === "watchTime"} onClick={() => setActiveTab("watchTime")}>
            Watch Time (Hours)
          </Tab>
          <Tab active={activeTab === "subscribers"} onClick={() => setActiveTab("subscribers")}>
            Subscribers
          </Tab>
        </TabsContainer>

        {/* Time Picker */}
        <TimePickerContainer>
          <DropdownTrigger onClick={handleDropdownToggle}>
            <DropdownText>{selectedRange}</DropdownText>
            <DropdownIcon>▼</DropdownIcon>
          </DropdownTrigger>

          {/* Dropdown Menu */}
          <DropdownMenu show={showDropdown}>
            <DropdownItem onClick={() => handleSelectRange("Last 7 days")}>Last 7 days</DropdownItem>
            <DropdownItem onClick={() => handleSelectRange("Last 28 days")}>Last 28 days</DropdownItem>
            <DropdownItem onClick={() => handleSelectRange("Last 90 days")}>Last 90 days</DropdownItem>
            <DropdownItem onClick={() => handleSelectRange("Last year")}>Last year</DropdownItem>
          </DropdownMenu>
        </TimePickerContainer>
      </div>

      {/* Chart and Real-Time Stats */}
      <ChartSection>
        <GraphContainer>
          {renderChart()}
        </GraphContainer>

        {/* Real-Time Stats */}
        <RealTimeStats>
          <StatItem>
            <StatLabel>Live Subscriber Count</StatLabel>
            <StatValue>350</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Views in Last 48 Hours</StatLabel>
            <StatValue>1,200</StatValue>
          </StatItem>
          <SeeMoreButton>See More</SeeMoreButton>
        </RealTimeStats>
      </ChartSection>

      {/* Insights */}
      <Insights>
        <InsightTitle>Key Insights</InsightTitle>
        <InsightText>Your top performing videos have increased traffic from external sources by 15% this week.</InsightText>
      </Insights>
    </Container>
  );
};

export default AnalyticsPage;
