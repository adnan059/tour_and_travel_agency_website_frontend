import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviewData } from "../../Data";
import "./Review.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Review = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading" data-aos="fade-up">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
        </h1>
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1092: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="review-slider"
        >
          {reviewData.map((rev, i) => (
            <SwiperSlide className="slider" key={i}>
              <div className="box" data-aos="fade-up">
                <img src={rev.image} alt="" />
                <h3>{rev.person}</h3>
                <p>{rev.speech}</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>{" "}
                  <i className="fas fa-star"></i>{" "}
                  <i className="fas fa-star"></i>{" "}
                  <i className="far fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Review;
