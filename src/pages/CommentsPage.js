import React, { useState } from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md'; // Import the filter icon

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 220px; /* Adjust if necessary for your layout */
`;

const PageHeader = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.text : theme.textSoft)};
  border-bottom: ${({ active, theme }) => (active ? `2px solid ${theme.primary}` : 'none')};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const CommentsSection = styled.div`
  margin-top: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

const Chip = styled.div`
  padding: 8px 16px;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.primary : theme.bgLighter)};
  color: ${({ theme, isSelected }) => (isSelected ? 'white' : theme.text)};
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const FilterIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: ${({ theme }) => theme.textSoft};
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 10;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.textSoft};
`;

const EmptyImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const EmptyMessage = styled.p`
  font-size: 18px;
  text-align: center;
`;

const data = {
  published: [],
  heldForReview: [],
};

const CommentsPage = () => {
  const [activeTab, setActiveTab] = useState('comments'); // 'comments' or 'mentions'
  const [activeFilter, setActiveFilter] = useState('published'); // 'published' or 'moderate'
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Dropdown state

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const renderComments = () => {
    const comments = data[activeFilter];
    if (comments.length === 0) {
      return (
        <EmptyState>
          <EmptyImage src="https://www.gstatic.com/youtube/img/creator/empty_state/start_searching_light.svg" alt="No comments" />
          <EmptyMessage>No comments found. Try searching for something else or removing filters.</EmptyMessage>
        </EmptyState>
      );
    }
    return <div>{/* Render comment list */}</div>;
  };

  return (
    <Container>
      {/* Page Header */}
      <PageHeader>
        <Title>Channel comments &amp; mentions</Title>
      </PageHeader>

      {/* Tabs (Comments / Mentions) */}
      <TabsContainer>
        <Tab active={activeTab === 'comments'} onClick={() => setActiveTab('comments')}>
          Comments
        </Tab>
        <Tab active={activeTab === 'mentions'} onClick={() => setActiveTab('mentions')}>
          Mentions
        </Tab>
      </TabsContainer>

      {/* Filter Section */}
      {activeTab === 'comments' && (
        <FilterContainer>
          <Chip isSelected={activeFilter === 'published'} onClick={() => setActiveFilter('published')}>
            Published
          </Chip>
          <Chip isSelected={activeFilter === 'moderate'} onClick={() => setActiveFilter('moderate')}>
            Held for review
          </Chip>
          {/* Filter Icon and Dropdown */}
          <DropdownContainer>
            <FilterIcon onClick={toggleDropdown}>
              <MdFilterList />
            </FilterIcon>
            <DropdownMenu isVisible={isDropdownVisible}>
              <p>Filter Option 1</p>
              <p>Filter Option 2</p>
              {/* Add more filter options as needed */}
            </DropdownMenu>
          </DropdownContainer>
        </FilterContainer>
      )}

      {/* Comments Section */}
      <CommentsSection>{renderComments()}</CommentsSection>
    </Container>
  );
};

export default CommentsPage;
