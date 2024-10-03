import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionHeader = styled.h2`
  color: ${({ theme }) => theme?.primary || "#3ea6ff"};
  font-size: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme?.text || "#333"};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  background-color: ${({ theme }) => theme?.bgLighter || "#f9f9f9"};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  background-color: ${({ theme }) => theme?.bgLighter || "#f9f9f9"};
`;

const UploadButton = styled.button`
  background-color: ${({ theme }) => theme?.primary || "#3ea6ff"};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme?.primaryDark || "#357abd"};
  }
`;

const ProfileTab = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [watermark, setWatermark] = useState(null);
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [links, setLinks] = useState([{ linkName: '', linkUrl: '' }]);

  const handleAddLink = () => {
    setLinks([...links, { linkName: '', linkUrl: '' }]);
  };

  return (
    <ProfileContainer>
      {/* Branding Section */}
      <Section>
        <SectionHeader>Channel Branding</SectionHeader>

        <Label>Profile Picture</Label>
        <UploadButton>Upload Profile Image</UploadButton>

        <Label>Banner Image</Label>
        <UploadButton>Upload Banner Image</UploadButton>

        <Label>Video Watermark</Label>
        <UploadButton>Upload Watermark</UploadButton>
      </Section>

      {/* Basic Info Section */}
      <Section>
        <SectionHeader>Basic Info</SectionHeader>

        <Label>Channel Name</Label>
        <Input
          type="text"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />

        <Label>Channel Description</Label>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Label>Custom Links</Label>
        {links.map((link, index) => (
          <div key={index}>
            <Input
              type="text"
              placeholder="Link Name"
              value={link.linkName}
              onChange={(e) => {
                const newLinks = [...links];
                newLinks[index].linkName = e.target.value;
                setLinks(newLinks);
              }}
            />
            <Input
              type="text"
              placeholder="Link URL"
              value={link.linkUrl}
              onChange={(e) => {
                const newLinks = [...links];
                newLinks[index].linkUrl = e.target.value;
                setLinks(newLinks);
              }}
            />
          </div>
        ))}
        <UploadButton onClick={handleAddLink}>Add Another Link</UploadButton>
      </Section>

      {/* Contact Info Section */}
      <Section>
        <SectionHeader>Contact Info</SectionHeader>

        <Label>Business Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Section>
    </ProfileContainer>
  );
};

export default ProfileTab;
