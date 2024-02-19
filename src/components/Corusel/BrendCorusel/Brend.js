import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brend.css';

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper/modules';

export default function Brend() {
  return (
    <>
    <div className='BrendCorusel'>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/70/7160cc7e-711b-44bb-a6dc-77dca7ec4924.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/71/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp'></img></SwiperSlide>
        <SwiperSlide><img  src='https://mini-io-api.texnomart.uz/catalog/special-brands/80/dd3aeb98-802f-4ddd-9d07-c1abd4b1a482-medium.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/73/9f3f6966-5f68-4bd1-a918-21f6f2c68f26.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/69/7cf53119-fae2-4da7-a479-88df9bd86d3a.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/74/c53e8986-c05a-4af7-b5a6-adafe1f04bff.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/89/409cc1aa-92c8-403e-96fc-f0e3dc15da92-medium.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-brands/89/409cc1aa-92c8-403e-96fc-f0e3dc15da92-medium.webp'></img></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
