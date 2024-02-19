
import { useState , useEffect} from 'react';
import axios from "axios"
import Card from "../../Card/CardProduct"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CardCorusel.css';

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper/modules';

export default function CenterInfo({tittle}) {
  const [ data , setData] = useState([]);  
  useEffect(()=> {
  let data = axios
  .get("https://dummyjson.com/products")
  .then ((res) => setData(res.data.products));
  },[]);
    console.log(data);
  return (
    <>
    <div className='CardCorusel'>
    <h2>{tittle}</h2>
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card kredit={"230 175 so'mdan / 24 oy"} discount={"4 520 547 so'm"} price={"3 300 000 so'm"} title={"Televizor Hisense 43A6K Smart"} image={"https://mini-io-api.texnomart.uz/catalog/product/3564/356418/193047/4fcd7a64-443f-443b-8a3b-2a5ac7dec1c0.png"}/></SwiperSlide>
        <SwiperSlide><Card kredit={"586 000 so'mdan / 24 oy"} discount={"3 520 547 so'm"} price={"2 930 000 so'm"} title={"Radar detektor ANTIRADAR"} image={"https://mini-io-api.texnomart.uz/catalog/product/1049/104904/182972/c0c6adb8-3725-4695-a06b-718967f20a9d.jpg"}/></SwiperSlide>
        <SwiperSlide><Card discount={"75 547 so'm"} price={"66 000 so'm"} title={"Avto Baseus"} image={"https://mini-io-api.texnomart.uz/catalog/product/850/85092/165572/7b05d433-b62f-48c9-b927-fbea8958bf62.jpg"}/></SwiperSlide>
        <SwiperSlide><Card discount={"2 125 000 so'm"} price={"1 538 000 so'm"} title={"Vedio registrator"} image={"https://mini-io-api.texnomart.uz/catalog/product/3561/356124/191384/da234ca8-1ca6-4b11-9ee4-dd088c05504a.webp"}/></SwiperSlide>
        <SwiperSlide><Card discount={"75 547 so'm"} price={"65 000 so'm"} title={"Avto Telefon padstavka"} image={"https://mini-io-api.texnomart.uz/catalog/product/1053/105337/183934/e3987f1c-819d-4fa0-9371-27bfe8c370bf.jpg"}/></SwiperSlide>
        <SwiperSlide><Card discount={"2 547 000 so'm"} price={"1 799 000 so'm"} title={"Gusht maydalagich"} image={"https://mini-io-api.texnomart.uz/catalog/product/3564/356400/193170/db122d1e-a4a6-47bb-ac92-a4865a7d431a.webp"}/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Card from '../Card/CardProduct'
// import { useState , useEffect} from 'react';
// import axios from "axios"

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './CardCorusel.css';

// // import required modules
// import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper/modules';

// export default function CardCorusel() {
//     const [ data , setData] = useState([]);  
//     useEffect(()=> {
//     let data = axios
//    .get("https://dummyjson.com/products")
//    .then ((res) => setData(res.data.products));
//    },[]);
//    console.log(data);
//   return (
//     <>
//     <div className='CardCorusel'>
//       <Swiper
//         navigation={true}
//         slidesPerView={1}
//         spaceBetween={10}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 8,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><Card/></SwiperSlide>
//         <SwiperSlide><Card/></SwiperSlide>
//         <SwiperSlide><Card/></SwiperSlide>
//         <SwiperSlide><Card/></SwiperSlide>  
//         <SwiperSlide><Card/></SwiperSlide>
//         <SwiperSlide><Card/></SwiperSlide>
//         <SwiperSlide><Card/></SwiperSlide>
//         <SwiperSlide><Card/></SwiperSlide>  

//       </Swiper>
//       </div>
//       {/* {data.slice(0,3).map((item)=><Card image={item.thumbnail} tittle={item.title} price={item.price} description={item.description}/>)} */}
//     </>
//   );
// }
