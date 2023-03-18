import React from "react";
import vid_1 from "../../assets/vid-1.mp4";
import vid_2 from "../../assets/vid-2.mp4";
import vid_3 from "../../assets/vid-3.mp4";
import vid_4 from "../../assets/vid-4.mp4";

import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Adventure is worthwhile</h3>
          <p>discover new places with us, adventure awaits!</p>
          <a href="#discover" className="btn">
            discover more
          </a>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          className="video-slider"
        >
          <SwiperSlide>
            <video src={vid_1} muted autoPlay />
          </SwiperSlide>
          <SwiperSlide>
            <video src={vid_2} muted autoPlay />
          </SwiperSlide>
          <SwiperSlide>
            <video src={vid_3} muted autoPlay />
          </SwiperSlide>
          <SwiperSlide>
            <video src={vid_4} muted autoPlay />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
