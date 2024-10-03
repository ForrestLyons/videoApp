import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const CustomizationPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const CustomizationContainer = styled.div`
  margin-left: 220px; /* Adjust for SideMenu1 */
  padding: 20px;
  max-width: 1400px;
  width: 100%;
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
  color: ${({ selected, theme }) =>
    selected ? theme?.primary || "#3ea6ff" : theme?.textSoft || "#999"};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme?.soft || "#ddd" : theme?.primary || "#3ea6ff"};
  color: ${({ disabled, theme }) =>
    disabled ? theme?.textSoft || "#999" : "white"};
  border: none;
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

// Section components for Banner, Profile Picture, and other inputs
const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SectionText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme?.textSoft || "#555"};
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ImagePreview = styled.img`
  width: 300px;
  height: 150px;
  background-color: ${({ theme }) => theme?.soft || "#ddd"};
  object-fit: cover;
  margin-right: 20px;
`;

const ImageTextContainer = styled.div`
  max-width: 400px;
  font-size: 12px;
  color: ${({ theme }) => theme?.textSoft || "#999"};
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  width: 300px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme?.textSoft || "#999"};
`;

// Channel URL Section
const ChannelUrlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%; /* Make sure it takes full width */
`;

const ChannelUrlInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  flex-grow: 1; /* Allow the input to grow and fill available space */
  margin-right: 10px;
  background-color: ${({ theme }) => theme?.soft || "#f1f1f1"};
  color: ${({ theme }) => theme?.text || "#333"};
  width: 100%; /* Set full width */
`;

const CopyButton = styled.button`
  background-color: ${({ theme }) => theme?.primary || "#3ea6ff"};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  flex-shrink: 0; /* Prevent the button from shrinking */
`;

// Pronoun and Description Section
const PronounInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  width: 200px;
  margin-right: 10px;
`;

const PronounVisibility = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const DescriptionTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  resize: none;
  font-size: 14px;
  color: ${({ theme }) => theme?.text || "#000"};
`;

const CharCounter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: ${({ theme }) => theme?.textSoft || "#999"};
  margin-top: 5px;
`;

const AddLanguageButton = styled(Button)`
  border-radius: 50px;
  padding: 10px 20px;
`;

// Links Section
const AddLinkButton = styled(Button)`
  border-radius: 50px;
  padding: 10px 20px;
  margin-top: 10px;
`;

// Contact Info Section
const ContactInfoInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme?.soft || "#ddd"};
  border-radius: 5px;
  width: 300px;
  background-color: ${({ theme }) => theme?.soft || "#f1f1f1"};
  color: ${({ theme }) => theme?.text || "#333"};
`;

const WatermarkSection = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const WatermarkHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const WatermarkDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme?.textSoft || "#555"};
  margin-bottom: 20px;
`;

const WatermarkPreviewContainer = styled.div`
  width: 150px;
  height: 150px;
  background-image: url("https://www.gstatic.com/youtube/img/creator/channel/branding_settings_video_watermark_player_v3.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 10px;
`;

const WatermarkImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("https://i.ytimg.com/an/YmEAnByTL8FSLhWQ3AFGtA/featured_channel.jpg?v=66e890a5");
  background-size: cover;
  margin: 0 auto;
`;

const WatermarkButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const DisplayTimeLabel = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

const CustomizationPage = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");
  const [channelName, setChannelName] = useState(""); // Channel name state
  const [handle, setHandle] = useState(""); // Handle state
  const [bannerImage, setBannerImage] = useState(null); // Banner image state
  const [profileImage, setProfileImage] = useState(null); // Profile image state
  const [pronoun, setPronoun] = useState(""); // Pronoun state
  const [visibility, setVisibility] = useState("Everyone"); // Pronoun visibility
  const [description, setDescription] = useState(""); // Description state
  const [channelUrl] = useState("https://youtube.com/channel/12345"); // Sample URL
  const [contactEmail, setContactEmail] = useState(""); // Contact info email
  const maxDescriptionLength = 1000;
  const [watermarkImage, setWatermarkImage] = useState(null);
  const [displayTime, setDisplayTime] = useState("end"); // Watermark display time

  const handleWatermarkChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setWatermarkImage(URL.createObjectURL(file));
    }
  };
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(channelUrl);
    alert("Channel URL copied to clipboard");
  };

  const handleBannerChange = () => {
    // Logic to change the banner image
  };

  const handleProfileChange = () => {
    // Logic to change the profile image
  };

  return (
    <CustomizationPageWrapper>
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
            {/* Banner Section */}
            <Section>
              <SectionHeader>Banner Image</SectionHeader>
              <SectionText>
                This image will appear across the top of your channel
              </SectionText>
              <ImageContainer>
                <ImagePreview
                  src={
                    bannerImage
                      ? URL.createObjectURL(bannerImage)
                      : "/default-banner.png"
                  }
                  alt="Banner Preview"
                />
                <ImageTextContainer>
                  For the best results on all devices, use an image that’s at
                  least 2048 x 1152 pixels and 6MB or less.
                </ImageTextContainer>
              </ImageContainer>
              <ButtonWrapper>
                <Button onClick={handleBannerChange}>Change</Button>
                <Button>Remove</Button>
              </ButtonWrapper>
            </Section>

            {/* Profile Picture Section */}
            <Section>
              <SectionHeader>Picture</SectionHeader>
              <SectionText>
                Your profile picture will appear where your channel is presented
                on YouTube, like next to your videos and comments.
              </SectionText>
              <ImageContainer>
                <ImagePreview
                  src={
                    profileImage
                      ? URL.createObjectURL(profileImage)
                      : "/default-profile.png"
                  }
                  alt="Profile Preview"
                />
                <ImageTextContainer>
                  It’s recommended to use a picture that’s at least 98 x 98
                  pixels and 4MB or less. Use a PNG or GIF (no animations) file.
                  Make sure your picture follows the YouTube Community
                  Guidelines.
                </ImageTextContainer>
              </ImageContainer>
              <ButtonWrapper>
                <Button onClick={handleProfileChange}>Change</Button>
                <Button>Remove</Button>
              </ButtonWrapper>
            </Section>

            {/* Name Section */}
            <Section>
              <SectionHeader>Name</SectionHeader>
              <SectionText>
                Choose a channel name that represents you and your content.
                Changes made to your name and picture are visible only on
                YouTube and not other Google services. You can change your name
                twice in 14 days.
              </SectionText>

              <InputContainer>
                <Input
                  type="text"
                  placeholder="Enter channel name"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                />
              </InputContainer>

              <SmallText>
                You can manage basic info about your YouTube channel such as
                channel name and description, translations, and links.
              </SmallText>
            </Section>

            {/* Handle Section */}
            <Section>
              <SectionHeader>Handle</SectionHeader>
              <SectionText>
                Choose your unique handle by adding letters and numbers. Handles
                are unique and short channel identifiers distinct from channel
                names, and they start with the “@” symbol. For example,
                @yourhandle.
              </SectionText>

              <InputContainer>
                <span>@</span>
                <Input
                  type="text"
                  placeholder="Set your handle"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  style={{ marginLeft: "5px" }}
                />
              </InputContainer>

              <SmallText>Handles can be changed twice every 14 days.</SmallText>
            </Section>

            {/* Pronouns Section */}
            <Section>
              <SectionHeader>Pronouns</SectionHeader>
              <SectionText>
                Optionally add your pronouns. Let others know how to refer to
                you. You can edit or remove them anytime. You can choose who can
                view your pronouns. Your pronouns will appear on your channel
                page.
              </SectionText>
              <InputContainer>
                <PronounInput
                  type="text"
                  placeholder="Add your pronoun"
                  value={pronoun}
                  onChange={(e) => setPronoun(e.target.value)}
                />
                <PronounVisibility
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                >
                  <option value="Everyone">Everyone</option>
                  <option value="Subscribers">Subscribers</option>
                </PronounVisibility>
              </InputContainer>

              <SmallText>You can add up to 4 pronouns.</SmallText>
            </Section>

            {/* Description Section */}
            <Section>
              <SectionHeader>Description</SectionHeader>
              <DescriptionContainer>
                <DescriptionTextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers about your channel. Your description will appear in the About section of your channel and search results, among other places."
                  maxLength={maxDescriptionLength}
                />
                <CharCounter>
                  {description.length}/{maxDescriptionLength}
                </CharCounter>
              </DescriptionContainer>
              <ButtonWrapper>
                <AddLanguageButton>Add Language</AddLanguageButton>
              </ButtonWrapper>
            </Section>

            {/* Channel URL Section */}
            <Section>
              <SectionHeader>Channel URL</SectionHeader>
              <SectionText>
                This is the standard web address for your channel. It includes
                your unique channel ID, which is the numbers and letters at the
                end of the URL.
              </SectionText>
              <ChannelUrlContainer>
                <ChannelUrlInput value={channelUrl} readOnly />
                <CopyButton onClick={handleCopyUrl}>Copy</CopyButton>
              </ChannelUrlContainer>
            </Section>

            {/* Links Section */}
            <Section>
              <SectionHeader>Links</SectionHeader>
              <SectionText>
                Share external links with your viewers. They'll be visible on
                your channel profile and about page.
              </SectionText>
              <ButtonWrapper>
                <AddLinkButton>+ Add Link</AddLinkButton>
              </ButtonWrapper>
            </Section>

            {/* Contact Info Section */}
            <Section>
              <SectionHeader>Contact Info</SectionHeader>
              <SectionText>
                Let people know how to contact you with business inquiries. The
                email address you enter may appear in the About section of your
                channel and be visible to viewers.
              </SectionText>
              <InputContainer>
                <ContactInfoInput
                  type="email"
                  placeholder="Email address"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </InputContainer>
            </Section>
            <WatermarkSection>
              <WatermarkHeader>Video Watermark</WatermarkHeader>
              <WatermarkDescription>
                The watermark will appear on your videos in the right-hand corner of the video player.
              </WatermarkDescription>
              <WatermarkPreviewContainer>
                <WatermarkImage
                  style={{
                    backgroundImage: `url(${watermarkImage || "https://i.ytimg.com/an/YmEAnByTL8FSLhWQ3AFGtA/featured_channel.jpg?v=66e890a5"})`,
                  }}
                />
              </WatermarkPreviewContainer>
              <WatermarkButtonWrapper>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleWatermarkChange}
                  style={{ display: "none" }}
                  id="upload-watermark"
                />
                <label htmlFor="upload-watermark">
                  <Button>Change</Button>
                </label>
                <Button>Remove</Button>
              </WatermarkButtonWrapper>

              <DisplayTimeLabel>Display Time</DisplayTimeLabel>
              <RadioGroup>
                <RadioButton>
                  <input
                    type="radio"
                    value="end"
                    checked={displayTime === "end"}
                    onChange={() => setDisplayTime("end")}
                  />
                  End of video
                </RadioButton>
                <RadioButton>
                  <input
                    type="radio"
                    value="custom"
                    checked={displayTime === "custom"}
                    onChange={() => setDisplayTime("custom")}
                  />
                  Custom start time
                </RadioButton>
                <RadioButton>
                  <input
                    type="radio"
                    value="entire"
                    checked={displayTime === "entire"}
                    onChange={() => setDisplayTime("entire")}
                  />
                  Entire video
                </RadioButton>
              </RadioGroup>
            </WatermarkSection>
          </div>
        )}

        {selectedTab === "Home Tab" && (
          <div>
            <h2>Home Tab Customization</h2>
            {/* Add content for home tab customization here */}
          </div>
        )}
      </CustomizationContainer>
    </CustomizationPageWrapper>
  );
};

export default CustomizationPage;
