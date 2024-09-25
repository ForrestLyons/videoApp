import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  margin-left: 220px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const ProgressBarContainer = styled.div`
  margin-bottom: 20px;
`;

const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 20px;
  height: 10px;
  position: relative;
  margin-top: 5px;
`;

const Progress = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
  width: ${({ value }) => `${value}%`};
  border-radius: 20px;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-top: 5px;
`;

const Subtext = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const EligibilityProgress = () => {
  const progressData = {
    subscribers: { count: 0, target: 500, progress: 0 },
    videoUploads: { count: 1, target: 3, progress: 33, timeFrame: "last 90 days" },
    watchHours: { count: 0, target: 3000, progress: 0, timeFrame: "last 365 days" },
    shortsViews: { count: 0, target: 3000000, progress: 0, timeFrame: "last 90 days" },
  };

  return (
    <Container>
      <Title>Eligibility</Title>

      {/* Subscribers Progress */}
      <ProgressBarContainer>
        <ProgressText>
          <span>{progressData.subscribers.count} subscribers</span>
          <span>{progressData.subscribers.target}</span>
        </ProgressText>
        <ProgressBar>
          <Progress value={progressData.subscribers.progress} />
        </ProgressBar>
      </ProgressBarContainer>

      {/* Video Uploads Progress */}
      <ProgressBarContainer>
        <ProgressText>
          <div>
            <span>{progressData.videoUploads.count} video uploads</span>
            <Subtext>{progressData.videoUploads.timeFrame}</Subtext>
          </div>
          <span>{progressData.videoUploads.target}</span>
        </ProgressText>
        <ProgressBar>
          <Progress value={progressData.videoUploads.progress} />
        </ProgressBar>
      </ProgressBarContainer>

      {/* Public Watch Hours Progress */}
      <ProgressBarContainer>
        <ProgressText>
          <div>
            <span>{progressData.watchHours.count} public watch hours</span>
            <Subtext>{progressData.watchHours.timeFrame}</Subtext>
          </div>
          <span>{progressData.watchHours.target}</span>
        </ProgressText>
        <ProgressBar>
          <Progress value={progressData.watchHours.progress} />
        </ProgressBar>
      </ProgressBarContainer>

      {/* Public Shorts Views Progress */}
      <ProgressBarContainer>
        <ProgressText>
          <div>
            <span>{progressData.shortsViews.count} public Shorts views</span>
            <Subtext>{progressData.shortsViews.timeFrame}</Subtext>
          </div>
          <span>{progressData.shortsViews.target}</span>
        </ProgressText>
        <ProgressBar>
          <Progress value={progressData.shortsViews.progress} />
        </ProgressBar>
      </ProgressBarContainer>
    </Container>
  );
};

export default EligibilityProgress;
