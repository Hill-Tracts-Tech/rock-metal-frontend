import React, { useState } from "react";
import styled from "styled-components";
import Phone from "@material-ui/icons/Phone";
import Message from "@material-ui/icons/Message";
import WhatsApp from "@material-ui/icons/WhatsApp";

// Styled Components
const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    bottom: 60px; // More space for smaller screens
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(20px)")};
  pointer-events: ${({ isOpen }) =>
    isOpen ? "auto" : "none"}; /* Prevent click when closed */
`;

const IconButton = styled.a`
  background-color: ${({ bgColor }) => bgColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  svg {
    color: white;
    width: 24px;
    height: 24px;
  }
`;

const ToggleButton = styled.button`
  background-color: #333;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  svg {
    color: white;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease;
  }
`;

// Main Component
const SocialContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      {/* Social Icons - Open Above the Main Button */}
      <IconsContainer isOpen={isOpen}>
        <IconButton
          href="https://m.me/rasalahmad.ahmad.3"
          target="_blank"
          rel="noreferrer"
          bgColor="#1877F2"
          hoverColor="#145dbf"
        >
          <Message />
        </IconButton>

        <IconButton
          href="https://api.whatsapp.com/send?phone=8801888422116"
          target="_blank"
          rel="noreferrer"
          bgColor="#25D366"
          hoverColor="#1ebe57"
        >
          <WhatsApp />
        </IconButton>

        <IconButton
          href="tel:+8801888422116"
          bgColor="#9C27B0"
          hoverColor="#7b1fa2"
        >
          <Phone />
        </IconButton>
      </IconsContainer>

      {/* Main Toggle Button at the Bottom */}
      <ToggleButton onClick={toggleIcons} isOpen={isOpen}>
        <Phone />
      </ToggleButton>
    </Wrapper>
  );
};

export default SocialContactButton;
