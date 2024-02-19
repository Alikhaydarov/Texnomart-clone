// import "./ProductCard.css";
// // import { useEffect , useState } from "react";
// import { FaRegHeart } from "react-icons/fa6";
// import { GoStarFill } from "react-icons/go";
// import { SlBasket } from "react-icons/sl";


// function ProductCard({tittle,image,price,description,thumbnail}) {
//     // let [count, setCount] = useState(0);
//     // function qush() {
//     //   if (count<10){
//     //     setCount (count+1)
//     //   }
//     // }
//     // function ayr(){
//     //   if (count>0){
//     //     setCount (count-1)
//     //   }
//     // }
//     return (
//         <div className="ProductCard">
//             <FaRegHeart className="Heart" />
//             <br/>
//             {/* <img src={image}></img> */}
//             <p className="title">{tittle}</p>
//             <GoStarFill className="star" />
//             <GoStarFill className="star" />
//             <GoStarFill className="star" />
//             <GoStarFill className="star" />
//             <GoStarFill className="star" />
//             <p className="priceExam">230 175 so'mdan / 24 oy</p>
//             <h3 className="">{price} 000 so'm</h3> < SlBasket className="Basket" />
//         </div>
        
//     );
    
// }

// export default ProductCard;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProductCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { useEffect , useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { SlBasket } from "react-icons/sl";

function ProductCard({title,image,price,description,id}) {
  return (
    <div className="cardproduct">
    <FaRegHeart className="Heart" />
    {/* <img src="https://texnomart.uz/_nuxt/img/compare.22b253f.svg" alt="" /> */}
    <br/>
    <img src={image} width={"50px"} height={"150px"}></img>
    <Link to={`/product/detail/${id}`} style={{textDecoration:"none"}}>
                       <p className="title">{title.slice(0,27)}</p>
          </Link>
    <GoStarFill className="star" />
    <GoStarFill className="star" />
    <GoStarFill className="star" />
    <GoStarFill className="star" />
    <GoStarFill className="star" />
    <p className="priceExam">sss</p>
    <h3 className="price">{price}</h3> < SlBasket className="Basket" />
</div>
    
  );
}

export default ProductCard;