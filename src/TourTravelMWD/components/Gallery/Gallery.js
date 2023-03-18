import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { galleryData } from "../../Data";
import "./Gallery.css";

const Gallery = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <section className="gallery" id="gallery">
        <h1 className="heading" data-aos="fade-up">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
        </h1>
        <div className="box-container">
          {galleryData.map((gal, i) => (
            <div className="box" key={i} data-aos="fade-up">
              <img src={gal.image} alt="" />
              <div className="content">
                <h3>{gal.title}</h3>
                <p>{gal.desc}</p>
                <a href="#book" className="btn">
                  see more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
