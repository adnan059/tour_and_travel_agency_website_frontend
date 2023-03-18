import React from "react";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Package from "./components/Package/Package";
import Review from "./components/Review/Review";
import Services from "./components/Services/Services";
import "./TTMWD.css";

const TTMWD = () => {
  return (
    <>
      <Header />
      <Home />
      <Book />
      <Package />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default TTMWD;
