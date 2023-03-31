import React from "react";
import Header from "../../components/Header/Header";
// import HomeSectionOne from "../../components/sections/HomeSectionOne";
import HomeSectionTwo from "../../components/sections/HomeSectionTwo";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import HomeSectionThree from "../../components/sections/HomeSectionThree";
import HomeFAQ from "../../components/sections/HomeFAQ";
import HomeNearBy from "../../components/sections/HomeNearBy";

const Home = () => {
  return (
    <div className="homeCOntainer">
      <Header />
      {/* <HomeSectionOne /> */}
      <HomeSectionThree />
      <HomeSectionTwo />
      <HomeFAQ />
      <HomeNearBy />
      <Footer />
    </div>
  );
};

export default Home;
