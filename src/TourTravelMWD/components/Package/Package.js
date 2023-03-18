import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { packageData } from "../../Data";
import "./Package.css";

const Package = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <section className="packages" id="packages">
        <h1 className="heading" data-aos="fade-up">
          <span>p</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span>a</span>
          <span>g</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="box-container">
          {packageData.map((pack) => (
            <div className="box" data-aos="fade-up">
              <img src={pack.image} alt="" />

              <div className="content">
                <h3>
                  <i className="fas fa-map-marker-alt"></i>
                  {pack.place}
                </h3>

                <p>{pack.desc}</p>

                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <div className="price">
                  {pack.price} <span>{pack.prevPrice}</span>
                </div>

                <a href="#booknow" className="btn">
                  book now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Package;
