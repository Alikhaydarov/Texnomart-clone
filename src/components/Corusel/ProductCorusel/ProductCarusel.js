// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import ProductCard from '../../Card/ProductCard'
// import { useState , useEffect} from 'react';
// import axios from "axios"

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './ProductCarusel.css';

// // import required modules
// import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper/modules';

// export default function ProductCarusel({img,title,price,description}) {
//     const [ data , setData] = useState([]);  
//     useEffect(()=> {
//     axios
//    .get("https://dummyjson.com/products")
//    .then ((res) => setData(res.data.products));
//    },[]);
//    console.log(data);
//   return (
//     <>
//     <div className='ProductCarusel'>
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
//         {data.map((item)=>
//                 <SwiperSlide>
//                     <ProductCard className={"ProductCard"}  image={item.thumbnail} title={item.title} price={item.price} description={item.description} id={item.id} />
//                </SwiperSlide>
               
//         )}
//       </Swiper>
          
//       </div>
//       {/* {data.slice(0,3).map((item)=><ProductCard />)} */}
//     </>
//   );
// }
  import { Swiper, SwiperSlide } from 'swiper/react';
 import ProductCard from '../../Card/ProductCard'
 import { useState , useEffect} from 'react';
 import axios from "axios"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ProductCarusel.css';

// import required modules
import { Navigation , Pagination } from 'swiper/modules';

export default function ProductCarusel() {
       const [ data , setData] = useState([]);  
     useEffect(()=> {
     axios
    .get("https://dummyjson.com/products")
    .then ((res) => setData(res.data.products));
    },[]);
    console.log(data);
  return (
      <div className="Product-Carusel">
      <Swiper navigation={true}
        slidesPerView={4  }
       spaceBetween={10}
       breakpoints={{
        640: {
            slidesPerView: 10,
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
         className="mySwiper">
             {data.map((item)=>
                 <SwiperSlide>
                     <ProductCard className={"ProductCard"}  image={item.thumbnail} title={item.title} price={item.price} description={item.description} id={item.id} />
          </SwiperSlide>
      )}
      </Swiper>
      </div>
  );
}
