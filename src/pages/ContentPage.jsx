import React, { useEffect, useState,useRef } from "react";
import { useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal"; // Material UI for modal
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close"; // Close button icon

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 220px; /* Ensure content is not hidden behind the side menu */
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.text};
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.text};
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.textSoft};
  }
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  position: relative; /* For dropdown positioning */
`;

const FilterButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const FilterInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};

  ::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 10%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  background-color: white;
  display: ${({ show }) => (show ? 'block' : 'none')}; /* Show/hide dropdown */
  z-index: 10;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 10px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const FilterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  gap: 40px; /* Increase the gap between the groupings */
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 80px; /* Increase the space between items in the center */
  justify-content: center;
  flex-grow: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 80px; /* Increase the space between items in the right */
  justify-content: flex-end;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

const NoContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

const NoContentImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 10px;
  margin-bottom: 20px;
  background-image: url('path/to/your/default-image.png'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
`;

const NoContentText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 750,
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const ContentPage = () => {
  const [hasContent, setHasContent] = useState(false); // Placeholder logic for content
  const [showDropdown, setShowDropdown] = useState(false); // State for controlling dropdown visibility
  const [filterText, setFilterText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  const fileInputRef = useRef(null);

  // Handle opening the file explorer when selecting files
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // Handle opening the file explorer when selecting files
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Handle file upload logic here
    }
  };

  const handleInputClick = () => {
    setShowDropdown(true); // Show dropdown when input is clicked
  };

  const handleDropdownItemClick = (option) => {
    setFilterText(option); // Set the input value to the clicked option
    setShowDropdown(false); // Close the dropdown after selection
  };

  useEffect(() => {
    // Check if query string contains "upload=true" to open the modal
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("upload") === "true") {
      setOpenModal(true);
    }
  }, [location]);

  const handleClose = () => {
    setOpenModal(false);
  };

  const filterOptions = [
    "Age restriction",
    "Copyright",
    "Description",
    "Made for kids",
    "Title",
    "Views",
    "Restrictions",
  ];

  return (
    <Container>
      <Title>Channel Content</Title>
      <Links>
        <Link to="/yourvideos/videos" activeClassName="active">Videos</Link>
        <Link to="/yourvideos/shorts" activeClassName="active">Shorts</Link>
        <Link to="/yourvideos/live" activeClassName="active">Live</Link>
        <Link to="/yourvideos/posts" activeClassName="active">Posts</Link>
        <Link to="/yourvideos/playlists" activeClassName="active">Playlists</Link>
        <Link to="/yourvideos/podcasts" activeClassName="active">Podcasts</Link>
        <Link to="/yourvideos/promotions" activeClassName="active">Promotions</Link>
      </Links>

      {/* Filter Section */}
      <FilterSection>
        <FilterButton>
          <FilterListIcon />
        </FilterButton>
        <FilterInput
          type="text"
          placeholder="Filter"
          autoComplete="off"
          value={filterText}
          onClick={handleInputClick}
          onChange={(e) => setFilterText(e.target.value)}
        />
        {/* Dropdown Menu */}
        <Dropdown show={showDropdown}>
          {filterOptions.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleDropdownItemClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </Dropdown>
      </FilterSection>

      {/* Links with CheckBox */}
      <FilterLinks>
        {/* Left Section */}
        <LeftSection>
          <Checkbox />
          <span>Video</span>
        </LeftSection>

        {/* Center Section */}
        <CenterSection>
          <span>Visibility</span>
          <span>Restrictions</span>
          <span>Date ↓</span>
        </CenterSection>

        {/* Right Section */}
        <RightSection>
          <span>Views</span>
          <span>Comments</span>
          <span>Likes (vs. dislikes)</span>
        </RightSection>
      </FilterLinks>

      {/* Modal for uploading files */}
      <Modal
        open={openModal}
        onClose={handleClose}
        BackdropProps={{
          onClick: (e) => e.stopPropagation(), // Prevent closing when clicking outside
        }}
      >
        <div style={modalStyle}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Upload Videos</h2>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={handleClose} // Close the modal on "X" click
            />
          </div>
          <p>Drag and drop video files to upload</p>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button onClick={handleFileClick}>Select files</button>
        </div>
      </Modal>

      {/* No Content Section */}
      {!hasContent ? (
        <NoContentSection>
          <NoContentImage /> {/* Placeholder for image */}
          <NoContentText>No content available</NoContentText>
          <UploadButton>Upload Videos</UploadButton>
        </NoContentSection>
      ) : (
        // If there is content, you can render it here
        <div>Content goes here...</div>
      )}
    </Container>
  );
};

export default ContentPage;
