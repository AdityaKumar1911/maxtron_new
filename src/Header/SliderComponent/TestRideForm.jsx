import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const TestRideForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    model: "",
    preferredDate: "",
  });

  const [selectedImage, setSelectedImage] = useState("https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_pro_web_271123.webp");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "model") {
      // Update image based on the selected model
      switch (value) {
        case "M1":
          setSelectedImage("https://cdn.olaelectric.com/sites/evdp/pages/s1air/s1_air_banner_web_image_v2.webp");
          break;
        case "M2":
          setSelectedImage("https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_pro_web_271123.webp");
          break;
        case "M3":
          setSelectedImage("https://images.firstpost.com/wp-content/uploads/2021/08/ola-electric-scooter-launch-date-announced.jpg");
          break;
        case "M4":
          setSelectedImage("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCPfmIxD5l1DyC5DXtEumH6Gq_Mf_gZbbVSWoQRZY-9gLPUrokzLjzpw7k9HaKJ9u9yEeknag_kykz2o0h_kTiR07WDV5AWFW6PPyJzAMMxI72kNUy13dsU7WNBBygcmVczb81e3J6XEnm93iX0esGW-YUvbnAzfDbUsL22fXuplsNJVU9H4rUknsgGl5t/s16000-rw/ola-s1-scooter.webp");
          break;
        default:
          setSelectedImage("https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_pro_web_271123.webp");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Test Ride Form Submitted!");
  };

  return (
    <FormWrapper>
      <AnimatedContainer>
        <ImageWrapper>
          <img src={selectedImage} alt="Selected Model EV Scooter" />
        </ImageWrapper>
        <FormContent>
          <FormTitle>Book Your EV Test Ride</FormTitle>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="model">Select Model</label>
              <select
                name="model"
                id="model"
                value={formData.model}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Model --</option>
                <option value="M1">Scooter M1</option>
                <option value="M2">Scooter M2</option>
                <option value="M3">Scooter M3</option>
                <option value="M4">Scooter M4</option>
              </select>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="preferredDate">Preferred Test Ride Date</label>
              <input
                type="date"
                name="preferredDate"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <SubmitButton type="submit">Book Test Ride</SubmitButton>
          </Form>
        </FormContent>
      </AnimatedContainer>
    </FormWrapper>
  );
};

// Keyframes for animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styled Components for a modern, animated, and responsive design
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
`;

const AnimatedContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1600px;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const FormContent = styled.div`
  width: 50%;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const FormTitle = styled.h2`
  color: #00796b;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div`
  text-align: left;

  label {
    display: block;
    font-size: 1rem;
    color: #555;
    margin-bottom: 8px;
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #f7f7f7;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #00796b;
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #004d40;
    transform: scale(1.05);
  }
`;

export default TestRideForm;
