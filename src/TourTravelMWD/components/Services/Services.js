import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { servicesData } from "../../Data";
import "./Services.css";

const Services = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <section className="services" id="services">
        <h1 className="heading" data-aos="fade-up">
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="box-container">
          {servicesData.map((serv, i) => (
            <div className="box" key={i} data-aos="fade-up">
              <i className={serv.icon}></i>

              <h3>{serv.title}</h3>

              <p>{serv.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
