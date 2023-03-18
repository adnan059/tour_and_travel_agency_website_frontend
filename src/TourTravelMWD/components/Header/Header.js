import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import TemporaryDrawer from "./Sidebar";

const Header = () => {
  const [showSB, setShowSB] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const ref1 = useRef();

  const checkSS = () => {
    if (window.innerWidth > 768) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (setShowLogin && ref1.current && !ref1.current.contains(e.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("hrefuchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("hrefuchstart", handler);
    };
  }, [showLogin]);

  useEffect(() => {
    window.addEventListener("scroll", () => setShowSB(false));

    return window.removeEventListener("scroll", () => setShowSB(false));
  }, []);

  useEffect(() => {
    checkSS();
    window.addEventListener("resize", checkSS);

    return () => window.removeEventListener("resize", checkSS);
  }, []);

  return (
    <>
      <header>
        {showSideBar && <TemporaryDrawer />}

        <a href="#home" className="logo">
          Travel
          <span>Point</span>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>

          <a href="#book">Book</a>

          <a href="#packages">Packages</a>

          <a href="#services">Services</a>

          <a href="#gallery">Gallery</a>

          <a href="#review">Review</a>

          <a href="#contact">Contact</a>
        </nav>

        <div className="icons">
          <i
            className={`fas fa-${showSB ? "times" : "search"}`}
            id="search-btn"
            onClick={() => setShowSB(!showSB)}
          ></i>
          <i
            onClick={() => setShowLogin(!showLogin)}
            className="fas fa-user"
            id="login-btn"
          ></i>
        </div>

        <form
          className={
            showSB ? "search-bar-container active" : "search-bar-container"
          }
        >
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </header>

      <div
        className={
          showLogin ? "login-form-container active" : "login-form-container"
        }
      >
        <form ref={ref1}>
          <i
            onClick={() => setShowLogin(!showLogin)}
            className="close-form fas fa-times"
          ></i>
          <h3>login</h3>
          <input
            type="email"
            className="box"
            placeholder="Enter your email..."
          />
          <input
            type="password"
            className="box"
            placeholder="Enter your password..."
          />
          <input type="submit" value="Login" className="btn" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> remember me</label>
          <p>
            forget password? <a href="#forgetPassword">click here</a>
          </p>
          <p>
            dont't have an account? <a href="#register">Register now</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Header;
