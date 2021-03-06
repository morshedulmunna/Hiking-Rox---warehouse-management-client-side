import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
const Banner = () => {
  return (
    <div className="relative">
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1587502538004-e9ec84b491c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1599423423923-8424f9a5c561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1590848047491-df276110685c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
      <div className="center">
        <h2 className="text-[22px] text-white">Where you Want to Go.....</h2>
        <h1 className="lg:text-[156px] md:text-[110px] text-[86px] text-white font-bold ">
          PLACE
        </h1>
      </div>
    </div>
  );
};

export default Banner;
