import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Category.css';

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper/modules';

export default function Category({tittle}) {
  return (
    <>

    <div className='CategoryCarusel'>
    <h3 className='h3'>{tittle}</h3>
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
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/4/c6d1ebd2-9113-4af7-a00e-fb33fae15ff3.webp'></img><span>Smartfon</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/5/aea82075-5f5c-45fa-bac8-ad86b97bfe27.svg'></img><span>Changyutgichlar</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/7/43e4d667-f026-484c-80a5-eebc1b128988.svg'></img><span>Muzlatgichlar</span></SwiperSlide>
        <SwiperSlide><img className='' src='https://mini-io-api.texnomart.uz/catalog/special-category/8/95eb09b2-df64-4827-9539-7596415851f9.webp'></img><span>Havo sovutgichlar</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/22/4bdb1f78-afd4-4e21-84b8-704678fee731.webp'></img><span>Noutbooklar</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/9/022df0cb-6560-4735-af2b-925057321911.svg'></img><span>Televizorlar</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/10/0fc51fb8-ba7d-42dc-bf7a-f131ac4f83f9.svg'></img><span>Fenlar</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/11/ecd242c1-1ff2-4c5e-8e67-3fe7e2819b00.svg'></img><span>kir yuvish mashinasi</span></SwiperSlide>
        <SwiperSlide><img src='https://mini-io-api.texnomart.uz/catalog/special-category/11/ecd242c1-1ff2-4c5e-8e67-3fe7e2819b00.svg'></img><span>Planshetlar</span></SwiperSlide>
      </Swiper>
      </div>

    </>
  );
}
