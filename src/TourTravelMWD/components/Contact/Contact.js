import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import contact from "../../assets/contact.gif";
import "./Contact.css";

const Contact = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading" data-aos="fade-up">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={contact} alt="" />
          </div>

          <form data-aos="fade-up">
            <div className="inputBox">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="inputBox">
              <input type="tel" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea placeholder="Message" cols="30" rows="10"></textarea>

            <input className="btn" type="submit" value="Send Message" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
