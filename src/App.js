import "./App.css";
import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer"
import DetailPage from "./pages/DetailPage";
import { ThreeDots } from "react-loader-spinner";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import {Route,Routes} from "react-router-dom";


function App() {
  const [loader, setLoader] = useState(true);
  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },3000)
  },[])
  return (
    <>
    {loader && <Loader/>}
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/detail/:id" element={<DetailPage/>}/>
      </Routes>
      <Footer />
    </div>
    </>
    
  );
}

export default App;



