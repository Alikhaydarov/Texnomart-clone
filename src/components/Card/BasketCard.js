import "./BasketCard.css"
import { BiX } from "react-icons/bi";
function BasketCard({CloseBasket}) {
    function CloseBas () {
        CloseBasket(false);
      }
    return(
        <div className="Basket-container">
            <div className="Basket-card">
                <h3>Savatcha</h3>
                <img src="https://texnomart.uz/_nuxt/img/shopping-card.24c7f25.svg" alt="" />
                <p>Savatchada xozirda <br />hech nima yo'q</p>
                <button>Xarid qilish</button>
                <BiX onClick={CloseBas} className="Icon"/>
            </div>
        </div>
    )
}
export default BasketCard;