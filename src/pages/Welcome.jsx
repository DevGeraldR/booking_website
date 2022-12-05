import React from "react";
import AboutUs from "../components/welcome/AboutUs";
import Activites from "../components/welcome/Activites";
import Book from "../components/welcome/Book";
import ContactUs from "../components/welcome/ContactUs";
import Footer from "../components/welcome/Footer";
import Header from "../components/welcome/Header";
import Hero from "../components/welcome/Hero";
import News from "../components/welcome/News";

function Welcome() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <News />
      <AboutUs />
      <Book />
      <Activites />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Welcome;
