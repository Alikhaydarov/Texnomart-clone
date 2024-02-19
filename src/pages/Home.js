import React, { useEffect, useState } from 'react'
import Banner from "../components/Corusel/BannerCorusel/Banner"
import Brend from "../components/Corusel/BrendCorusel/Brend"
import Category from '../components/Corusel/CategoryCorusel/Category'
import CardCorusel from '../components/Corusel/CardCorusel/CardCorusel'
import ProductCarusel from '../components/Corusel/ProductCorusel/ProductCarusel'
import axios from 'axios'
function Home() {
  const [datas, setDatas] = useState([])
  function getData() {
    axios
    .get("hhtps://dummyjson.com/products")
    .then((res) => setDatas(res.data))
    .then((log) => console.log(log))
    .catch((err) => console.log(err))
  }
  useEffect(() =>{
    getData();
  },[])
  console.log(datas?.products);

  return (
    <div>
        <Banner />
        <Brend />
        <Category tittle={"Ommabop kategoriyalar"}/>
        <ProductCarusel/>
        <CardCorusel tittle={"Yangi Mahsulotlar"}/>
    </div>
  )
}

export default Home;