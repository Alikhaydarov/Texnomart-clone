import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { TiDelete } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HeaderDesktop.css";
import BasketCard from "../../Card/BasketCard";
import { Link } from "react-router-dom";
import LoginCard from "../../Card/LoginCard";
import DesktopMenu from "../../Menu/DesktopMenu";
import { useState, useEffect } from "react";
// import { useTranslation } from 'react-i18next';
// const {t, i18n } = useTranslation();
// const handleChangeLanguage = (lng) =>{
//   i18n.changeLanguage(lng)
// }


let box = document.querySelector(".search-block")
function HeaderDesktop() {
  const [value, setValue] = useState('')
  const [data,setData] = useState([])
  useEffect(()=>{
    const getData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${value}`).then(res=> 
        setData(res.data)).then(r=>r).catch(E=>console.log(E))
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[value])
  console.log(data)
  console.log(value);
  const [openLogin , SetOpenLogin] = useState(false);
  function openLog() {
    SetOpenLogin(true);
  }
  const [openBasket , SetOpenBasket] = useState(false);
  function openBas() {
    SetOpenBasket(true);
  }
      const [open, setOpen] = useState(false);
    function openMenu() {
      setOpen(!open);
    }
    function close(){
      if (value = "") {
        box.classList(".menu-none");
      }
    }
    function closeSearch(){
      setValue("")
    }


  // // login function
  // const [login, setlogin] = useState(false);
  // function openlogin() {
  //   setlogin(!login);
  // }
  // const [Phone, setPhone] = useState("+998")
  // const [Name, setName] = useState("")
  // const [Fullname, setFullname] = useState("")
  // const [Email, setEmail] = useState("")
  // function change (e){
  //     alert (`Telefon raqami: ${Phone} ismi: ${Name} Familiyasi ${Fullname} Emaili: ${Email} `)
  //     e.preventDefault();
  // }
  return (
    <div className="header-desktop" onClick={closeSearch}>
      {/* Header top start */}
      <div className="header-desktop-top">
        <div className="header-top-left">
          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
              className="header-hover-regions"
            >
              <MdOutlineLocationOn color="#fff" fontSize={"18px"} /> Toshkent
              <ul className="header-region">
                <li>Toshkent</li>
                <li>Samarqand</li>
                <li>Buxara</li>
                <li>Jizzax</li>
                <li>Sirdaryo</li>
                <li>Qashqadaryo</li>
                <li>Jizzax</li>
                <li>Sirdaryo</li>
                <li>Qashqadaryo</li>
              </ul>
            </li>
            <li>Bizning dukonlarimiz</li>
            <li
              style={{
                backgroundColor: "rgb(127,127,127)",
                borderRadius: 5,
                  padding: "0px 5px",
                }}
            >
              Yuridik shaxslar uxhun
            </li>
            <li>Mudatli to'lovga sotib olish</li>
            <li>To'lov usullari</li>
          </ul>
        </div>
        <div className="header-top-right">
          <span style={{
            padding:"10px 10px",
          }}>Aloqa markazi: +998994483690</span>
          <ul>
            <li className="option" >💥Ru
            <div className="option-hover">
              <li>RU</li>
            </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Header top end */}
      {/* Header middle start */}
      <div className="header-desktop-middle">
        <div className="header-middle-left">
          <img
            src="https://texnomart.uz/_nuxt/img/texnomart-logo.fcda25c.svg"
            alt=""
          />
          <button onClick={openMenu}>
            {open ? <BiX  fontSize={25} style={{ marginRight: 10}} /> : <HiOutlineMenu fontSize={25} style={{ marginRight: 10 }} /> }
          Katalog
          </button>
          {/* {open ? <div className="menu"></div> : <span></span>} */}
          <div className="search-container">
          <div className="search-input">
          <BiSearch className="search-icon" />
            <input value={value}
             placeholder="Qidirish"
              onChange={(e)=>setValue(e.target.value)}
               type="text" />
          </div>
          </div>
          {value ==="" ? (""):(<div className="search-block">
            {data.products?.map((item) => (
              <Link className="link-s" to={`product/detail/${item.id}`} style={{textDecoration:"none"}}>  
              <div className="box">
                <img src={item.thumbnail} alt=""  width={"30px"}/>
                 <ul>
                <li>{item.title}</li>
             </ul>

              </div>
              </Link>
              ))}
              
               </div>
               
               )}

        </div>
        <div className="header-middle-right">
          <div onClick={openLog} className="header-right-box">
            <FaRegUser />
            <span>Kirish</span>
          </div>
          <div   className="header-right-box">
            <BiHeart />
            <span>Sevimlilar</span>
          </div>
          <div onClick={openBas} className="header-right-box">
            <SlBasketLoaded />
            <span>Savatcha</span> 
          </div>
        </div>
      </div>
      {/* Header middle end */}
      <div className="header-desktop-bottom">
      <ul>
            <li>AKSIYALAR</li>
            {/* <li>
              <span></span>
            </li> */}
            {/* <li className="header-bottom-tag clr"><img className="img" src="https://texnomart.uz/_nuxt/img/mazzanarx.92d5aca.svg" alt="" />Mazzali narxlar</li> */}
            <img src="	https://texnomart.uz/_nuxt/img/low_prices_uz.433edcd.gif" alt="" width={"150px"} height={"22px"}/>
            <li>XAVO SOVUTGICHLARI</li>
            <li>SMARTFONLAR</li>
            <li>MUZLATGICHLAR</li>
            <li>CHANGYUTGICHLAR</li>
            <li>NOUTBUKLAR</li>
            <li>TELEVEZORLAR</li>
            <li>BARCHA KATEGORIYALAR</li>
          </ul>
      </div>
      {open && <DesktopMenu/>}
{openLogin && <LoginCard LoginClose={SetOpenLogin}/>}
{openBasket && <BasketCard CloseBasket={SetOpenBasket}/>}
    </div>
    
  );
}

export default HeaderDesktop;
