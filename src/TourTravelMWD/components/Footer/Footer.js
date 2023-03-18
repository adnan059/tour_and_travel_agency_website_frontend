import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              nihil nulla delectus, et eius cumque. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Totam, vel. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Praesentium, ducimus.
            </p>
          </div>

          <div className="box">
            <h3>branch locations</h3>
            <a href="#italy">Italy</a>
            <a href="#bangladesh">Bangladesh</a>
            <a href="#USA">USA</a>
            <a href="#SouthAfrica">South Africa</a>
            <a href="#japan">Japan</a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home">Home</a>
            <a href="#book">Book</a>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="box socials">
            <h3>Follow us</h3>

            <a
              href="https://www.facebook.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.twitter.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <h1 className="credit">
          created by <span>Md Adnan Faruk</span> | all rights reserved!
        </h1>
      </section>
    </>
  );
};

export default Footer;
