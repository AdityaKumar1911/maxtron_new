import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TestRideForm from "./Header/SliderComponent/TestRideForm";
import AllPage from "./AllPage"; // Main component (All Pages)
import OfferAdd from "./Header/Header";
import Navbar from "./Header/Navbar";
import DealerPage from "./Header/SliderComponent/Dealership";
import M1Scooter from "./Header/M1Scooter";
import ScooterBooking from "./Header/SliderComponent/ScooterBooking";
import ScooterData from "./Header/SliderComponent/ScooterData";
import BlogPageAll from "./Header/SliderComponent/BlogPageAll";
import Footer from "./Header/SliderComponent/Footer";
import AboutUsFullPage from "./Header/SliderComponent/AboutUsFuulPage";
import WhyFull from "./Header/SliderComponent/WhyFull";
import M2Scooter from "./Header/M2Scooter";
import M3Scooter from "./Header/M3Scooter";
import M4Scooter from "./Header/M4Scooter";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Define a Layout component to conditionally render the footer
function Layout({ children }) {
  const location = useLocation(); // Get the current location
  return (
    <>
      <OfferAdd />
      <Navbar />
      {children}
      {/* Conditionally render the Footer only if the current path is not /dealer */}
      {location.pathname !== "/dealer" && <Footer />}
    </>
  );
}

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <Layout>
          {/* Define your routes */}
          <Routes>
            <Route path="/" element={<AllPage />} />
            <Route path="/testride" element={<TestRideForm />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/m1" element={<M1Scooter />} />
            <Route path="/m2" element={<M2Scooter />} />
            <Route path="/m3" element={<M3Scooter />} />
            <Route path="/m4" element={<M4Scooter />} />
            <Route path="/sbooking" element={<ScooterBooking />} />
            <Route path="/scooterdata" element={<ScooterData />} />
            <Route path="/blogpageall" element={<BlogPageAll />} />
            <Route path="/aboutus" element={<AboutUsFullPage />} />
            <Route path="/whyfull" element={<WhyFull />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
