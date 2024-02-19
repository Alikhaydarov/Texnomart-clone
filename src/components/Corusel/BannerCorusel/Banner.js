import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../../Images/photo_1_2023-11-17_14-52-04.jpg"
import image2 from "../../../Images/photo_2_2023-11-17_14-52-04.jpg"
import image3 from "../../../Images/photo_3_2023-11-17_14-52-04.jpg"
import image4 from "../../../Images/photo_4_2023-11-17_14-52-04.jpg"
import image5 from "../../../Images/photo_5_2023-11-17_14-52-04.jpg"
import image6 from "../../../Images/photo_6_2023-11-17_14-52-04.jpg"
import image7 from "../../../Images/photo_7_2023-11-17_14-52-04.jpg"
import image8 from "../../../Images/photo_8_2023-11-17_14-52-04.jpg"
import image9 from "../../../Images/photo_9_2023-11-17_14-52-04.jpg"



import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Banner.css"

function Banner() {
  return (
    <div className='banner_main'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>        
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner;