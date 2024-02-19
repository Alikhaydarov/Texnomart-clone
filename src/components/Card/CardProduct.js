import "./CardProduct.css";
import { useEffect , useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { SlBasket } from "react-icons/sl";



function CardProduct({image,title,price,discount}) {
    let [count, setCount] = useState(0);
    function qush() {
      if (count<10){
        setCount (count+1)
      }
    }
    function ayr(){
      if (count>0){
        setCount (count-1)
      }
    }
    return (
        <div className="cardproduct">
            <FaRegHeart className="Heart" />
            {/* <img src="https://texnomart.uz/_nuxt/img/compare.22b253f.svg" alt="" /> */}
            <br/>
            <img src={image} width={"100px"} height={"150px"}></img>
            <p className="title">{title}</p>
            <GoStarFill className="star" />
            <GoStarFill className="star" />
            <GoStarFill className="star" />
            <GoStarFill className="star" />
            <GoStarFill className="star" />
            <p className="priceExam">{discount}</p>
            <h3 className="price">{price}</h3> < SlBasket className="Basket" />
        </div>
        
    );
    
}

export default CardProduct;