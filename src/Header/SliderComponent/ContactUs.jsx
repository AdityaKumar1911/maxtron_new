import React, { useState } from "react";
import styled from "styled-components";
import ContectUsImg from "../../images/Contact Us Image copy.jpg";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ContactWrapper>
      <ContactContent>
        <LeftImage src={ContectUsImg} alt="Contact Us" />
        <FormContent>
          <ContactHeader>Contact Us</ContactHeader>
          <Tabs>
            <Tab
              active={activeTab === "general"}
              onClick={() => handleTabClick("general")}
            >
              General Inquiry
            </Tab>
            <Tab
              active={activeTab === "partnerships"}
              onClick={() => handleTabClick("partnerships")}
            >
              Partnerships
            </Tab>
            <Tab
              active={activeTab === "support"}
              onClick={() => handleTabClick("support")}
            >
              Support
            </Tab>
          </Tabs>

          <FormContainer>
            {activeTab === "general" && (
              <ContactForm>
                <FormTitle>General Inquiry</FormTitle>
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Your Message" />
                <SubmitButton>Send Message</SubmitButton>
              </ContactForm>
            )}

            {activeTab === "partnerships" && (
              <ContactForm>
                <FormTitle>Partnerships</FormTitle>
                <Input placeholder="Company Name" />
                <Input placeholder="Contact Person" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Partnership Details" />
                <SubmitButton>Submit</SubmitButton>
              </ContactForm>
            )}

            {activeTab === "support" && (
              <ContactForm>
                <FormTitle>Support</FormTitle>
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Describe Your Issue" />
                <SubmitButton>Get Support</SubmitButton>
              </ContactForm>
            )}
          </FormContainer>
        </FormContent>
      </ContactContent>
    </ContactWrapper>
  );
};

// Styled Components
const ContactWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  //   border-radius: 10px;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.1);
  margin: 50px 20px;
  border-radius: 8px;
`;

const ContactContent = styled.div`
  display: flex;
  align-items: stretch; /* Make both sides (image and form) have equal height */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftImage = styled.img`
  width: 45%;
  border-radius: 10px;
  object-fit: cover;
  height: 100%; /* Makes the image match the height of the form */

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const FormContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContactHeader = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap; /* Allow tabs to wrap if they don't fit in one line */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Tab = styled.div`
  font-size: 1.25rem;
  padding: 10px 20px; /* Adjusted padding to avoid overflow */
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : "#2c3e50")};
  background-color: ${(props) => (props.active ? "#00e676" : "#ecf0f1")};
  border-radius: 30px;
  margin: 10px 10px; /* Reduced margin to handle space better on smaller screens */
  transition: background-color 0.3s ease;
  white-space: nowrap; /* Prevent text wrapping inside a tab */

  // &:hover {
  //   background-color: #3498db;
  //   color: #fff;
  // }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 8px 15px; /* Smaller padding on mobile */
    text-align: center;
  }
`;

const FormContainer = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  flex-grow: 1; /* Ensures the form content stretches to match the image height */
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 20px;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  font-size: 1rem;
  min-height: 150px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  margin-top: 20px;
  background-color: #00e676;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  // &:hover {
  //   background-color: #2980b9;
  // }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
`;

export default ContactUs;
