import React from 'react'
import "./Loader.css"
import { ThreeDots } from "react-loader-spinner"
import { useState, useEffect } from 'react'
function Loader() {
  return (
    <div className='loader'>
        <ThreeDots
          height="130"
          width="130"
          radius="9"
          color="#008dff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
    </div>
    
  )
}

export default Loader