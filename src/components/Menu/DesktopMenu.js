import React, { useState } from 'react'
import "./DesktopMenu.css"
import {  Row,Col } from 'react-bootstrap';
import { MdArrowForwardIos } from "react-icons/md";
import menu from "../Menu/data.json"
function DesktopMenu() {
  const [menuId, setId] = useState(1);
  console.log(menuId);
  return (
    <div className='Desktop-menu-container'>
        <div className="desktop-menu">
            <div className="desktop-menu-left">
              <ul>
                {menu.map((item) => (
                
                  <li id={item.id} onMouseOver={() => setId(item.id)} className={`${item.id == menuId ? 'li-hover':""}`}>
                    <div>
                    <img src={item.icon} alt="" />
                    <span>{item.name}</span>
                    </div>
                    <MdArrowForwardIos className='menu-icon' />
                  </li>
                ))}
              </ul>
            </div>
            <div className="desktop-menu-right">
              <h2>{menu[menuId - 1].name}</h2>
              <div className="menu-right-container">
                {menu[menuId - 1]["submenu"].map((item)=>
                 <div className="menu-card">
                  <h4>{item.name}</h4>
                  <ul>
                    {item.submenu.map((i)=> (
                      <li>{i}</li>
                    ))}
                    
                  </ul>
                  
                 </div>
                )}

              </div>
              
              
            </div>
        </div>
    </div>
  )
}

export default DesktopMenu;