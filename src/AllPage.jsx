import React from "react";
import SliderComponent from "./Header/SliderComponent/SliderComponentAll";
import SavingsCalculator from "./Header/SliderComponent/EmiCalculater";
import WhyChooseMaxtron from "./Header/SliderComponent/WhyChooseMaxtron";
import DealerLocator from "./Header/SliderComponent/DealerNetwork";
import Footer from "./Header/SliderComponent/Footer";
import UserResources from "./Header/SliderComponent/UserResources";
import ContactUs from "./Header/SliderComponent/ContactUs";
import BlogPage from "./Header/SliderComponent/BlogPage";
import TestimonialsPage from "./Header/SliderComponent/TestimonialsPage";
import NewsletterSubscription from "./Header/SliderComponent/Newsletter";
// import TestRideForm from './Header/SliderComponent/TestRideForm';
import Popup from "./Header/Popup";
// import Header from './Header/Header';
import Navbar from "./Header/Navbar";
import AboutUs from "./Header/SliderComponent/AboutUS";
import Nav from "../src/Header/Nav";
const AllPage = () => {
  return (
    <div>
      <Popup />

      {/* <Navbar /> */}
      <Nav />
      <SliderComponent />
      <SavingsCalculator />
      <WhyChooseMaxtron />
      <AboutUs />
      <DealerLocator />
      <UserResources />
      <ContactUs />
      <BlogPage />
      <TestimonialsPage />
      <NewsletterSubscription />
      {/* <TestRideForm/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default AllPage;
