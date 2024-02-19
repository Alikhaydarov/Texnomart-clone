
import {BiHeart} from 'react-icons/bi'
import {BsFillStarFill,} from 'react-icons/bs'
import {MdShoppingBasket} from "react-icons/md"
import {RxDotFilled} from "react-icons/rx"
import { TiMessage } from 'react-icons/ti'
import Loader from '../components/Loader'
import { useTranslation, } from 'react-i18next';
import {FaFacebookF,FaTelegramPlane,FaTwitter,FaWhatsapp} from "react-icons/fa"
import React, { useRef, useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./DetailPage.css"


  function DetailPage() {
    const [data,setData] = useState([])
    const [loader, setLoader] = useState(true);
    let {id} = useParams()  
    useEffect(()=>{
      const getData = async () => {
        try {
          const res = await axios.get(`https://dummyjson.com/products/${id}`)
          console.log(res)
          setData(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getData()
    },[id])
    console.log(data)
    const {discountPercentage,title,price,brand,images,description} = data
    const img1 = images?.slice(0,1)[0]
    const img2 = images?.slice(0,2)[1]
    const img3 = images?.slice(0,3)[2]
    const img4 = images?.slice(0,4)[3]

    console.log(images)
   return (
     <div className='detail-page-container'>
      <div className="detail-page-left">
        <Link to={"/"}>        <li>home page</li></Link>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      > 
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" /> 
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
      </Swiper>
      </div>

      <div className="detail-page-center">
        {title}
      </div>
      <div className="detail-page-right">
        {price}
      </div>
     </div>
   )
 }
 
 export default DetailPage
// import React, { useState } from 'react'
// import axios from 'axios'
// const [data, setData] = useState();
// function getData() {
//   axios
//   .get("")
// }
// function DetailPage() {
  
//   return (
//     <div>DetailPage</div>
//   )
// }

// export default DetailPage
