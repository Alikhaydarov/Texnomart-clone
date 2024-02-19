import React from 'react'
import "./FooterDesktop.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function FooterDesktop() {
  return (
    <div className='footer-desktop'>
        <div className='footer-top'>
            <div className='Box1'>
              <p className='text'>Savolingiz bormi? Qo'ng'iroq qiling</p>
              <h2 className='text'>+998 71 209 99 44</h2>
              <FaFacebookF className='f-icon' href='./'/>
              <FaTelegramPlane href="https://t.me/Alikhaydarov17" className='f-icon'/>
              <FaInstagram  className='f-icon'/>
              <FaYoutube className='f-icon'/>
              <div className="images">
              <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-uz.dd1706c.svg" alt="" href="https://t.me/ali"/>
              <img src="https://texnomart.uz/_nuxt/img/appstore-logo-uz.c0ddd57.svg" alt="" href="https://t.me/ali"/>
              </div>
              <br />
              <a href="">Do`konlar manzillari Тошкент</a>
              
              </div>
            <div className='Box2'>
              <div className="text">
              <h3>Kompaniya</h3>
              <ul>
                <li><a href="">Yuridik shaxslar uchun</a></li>
                <li><a href="">Biz haqimizda</a></li>
                <li><a href="">Yangiliklar va bloglar</a></li>
                <li><a href="">IMEI ni tekshirish</a></li>
              </ul>
            </div>
            </div>
            <div className='Box3'>
            <div className="text">
              <h3>Ma'lumot</h3>
              <ul>
                <li><a href="">Bepul yetkazib berish</a></li>
                <li><a href="">Bonus tizimi</a></li>
                <li><a href="">Texnomartda ishlash</a></li>
                <li><a href="">Shaxsiy kabinet</a></li>
                <li><a href="">Aloqa raqamlari</a></li>
              </ul>
            </div>
            </div>
            <div className='Box4'>
            <div className="text">
              <h3>Haridorga yordam</h3>
              <ul>
                <li><a href="">Muddatli to'lovga sotib olish</a></li>
                <li><a href="">Maxsulotni qaytarish</a></li>
                <li><a href="">Mahsulotlar uchun kafolat</a></li>
                <li><a href="">Ko'p so'raladigan savollar</a></li>
              </ul>
              <a className='telegram-bot' href="./"><FaTelegramPlane className='t-icon'/>Bonusingizni bilib oling</a>
            </div>
            </div>
        </div>
        <div className='footer-button'>
          <div className="footer-buttom-left">
            <small>2016-2023 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib <br /> olish shartlari joriy sanaga amal qiladi</small>
            </div>
          <div className="footer-buttom-rigth">
            <div className="images">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII=" alt="" />
            <img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" />
            <img src="https://texnomart.uz/_nuxt/img/intend.81957d2.png" alt="" />
            <img src="https://texnomart.uz/_nuxt/img/payme.677630d.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default FooterDesktop;