// CopyrightPage.jsx
import React from "react";
import styled from "styled-components";

// Styled components for layout
const CopyrightContainer = styled.div`
  margin-left: 220px; /* Adjust for SideMenu1 */
  padding: 20px;
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
    selected ? `4px solid ${theme.primary}` : 'none'};
  color: ${({ selected, theme }) => (selected ? theme.primary : theme.textSoft)};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  border-radius: 8px;
`;

const NoContentMessage = styled.div`
  text-align: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.textSoft};
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const MessageText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightPage = () => {
  return (
    <CopyrightContainer>
      <Header>Copyright Management</Header>
      <TabsContainer>
        <Tab selected={true}>Removal Requests</Tab>
        <ActionButton>New Removal Request</ActionButton>
      </TabsContainer>

      <Section>
        <NoContentMessage>
          <ImageWrapper>
            <img
              src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_v4.svg"
              alt="No Content"
              width="150px"
            />
          </ImageWrapper>
          <MessageText>
            You haven’t submitted any <Link href="https://support.google.com/youtube/answer/2807622?hl=en">copyright takedown requests</Link>.
          </MessageText>
          <MessageText>
            Looking for a copyright claim somebody made on <em>your</em> video? Check the <Link href="/channel/UCYmEAnByTL8FSLhWQ3AFGtA/videos/upload?filter=%5B%7B%22name%22%3A%22HAS_COPYRIGHT_CLAIM%22%2C%22value%22%3A%22VIDEO_HAS_COPYRIGHT_CLAIM%22%7D%5D">video list</Link>.
          </MessageText>
        </NoContentMessage>
      </Section>
    </CopyrightContainer>
  );
};

export default CopyrightPage;
