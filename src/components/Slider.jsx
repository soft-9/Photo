import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={8}
        className="relative flex  lg:top-[-10rem] bg-white h-20 shadow-lg  select-none w-full mySwiper"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          640: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },

          1280: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <div
            className=" w-full h-full flex items-center justify-center  hover:bg-[#e7e7e74d] hover:text-[#20d598] cursor-pointer transition-all 
          duration-300 text-[15px] lg:text-[20px]  "
          >
            <p> Corona - Covid</p>
          </div>
        </SwiperSlide>
        {[...Array(18)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-10 hover:bg-[#e7e7e74d] hover:text-[#20d598] cursor-pointer transition-all duration-300 text-[15px] lg:text-[20px]"
          >
            <div className="w-full h-full flex items-center justify-center hover:bg-[#e7e7e74d] hover:text-[#20d598] cursor-pointer transition-all duration-300 text-[15px] lg:text-[20px]">
              <p>Interior Decoration</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
