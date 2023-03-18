import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import book from "../../assets/book.gif";
import "./Book.css";

const Book = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      <section className="book" id="book">
        <h1 className="heading" data-aos="fade-up">
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span className="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={book} alt="" />
          </div>
          <form data-aos="fade-up">
            <div className="inputBox">
              <h3>Where to</h3>
              <input type="text" placeholder="place name" />
            </div>

            <div className="inputBox">
              <h3>how many</h3>
              <input type="number" placeholder="number of guests" />
            </div>

            <div className="inputBox">
              <h3>arrival</h3>
              <input type="date" name="" id="" />
            </div>

            <div className="inputBox">
              <h3>departure</h3>
              <input type="date" name="" id="" />
            </div>

            <input type="submit" value="Book Now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Book;
