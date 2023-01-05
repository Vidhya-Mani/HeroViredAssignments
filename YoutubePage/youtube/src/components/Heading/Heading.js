import React, { useEffect } from 'react';
import "./Heading.css"
export default function Heading() {
   useEffect(() => {
      // let order = document.querySelector(".icon");
      // let childorder = order.children;
      let search1 = document.querySelector("span");
      let create1 = document.querySelector(".icon2");
      let bell1 = document.querySelector(".icon3");
      let vidhya = document.querySelector(".icon4");
      // childorder.addEventListener("mouseenter", () =>{
      //    childorder.style.backgroundColor="#dbdbdb";
      // })
      search1.addEventListener("mouseenter", () => {
         alert("Search with your voice")
      })
      create1.addEventListener("mouseenter", () => {
         alert("Create")
      })
      bell1.addEventListener("mouseenter", () => {
         alert("Notifications")
      })
      vidhya.addEventListener("mouseenter", () => {
         alert("Welcome to Anbudan Vidhya!!!")
      })

   }, [])

   return (
      <div className='heading'>
         <div className='section1'>
            <div className="icon">
               <i className="fa fa-reorder"></i>
            </div>
            <div className="logo">
               <img src="/images/youtube.png" alt="youtube_logo" height='60px' width='110px' />
               <super>IN</super>
            </div>


         </div>
         <div className='section2'>
            <button >
               <div className="searchbox">
                  <input type="text" placeholder='Search'></input>
                  <i className="fa fa-search"></i>
               </div>
               </button>

               <span className="icon1">
                  <i className="fa fa-microphone"></i>
               </span>

         </div>
         <div className='section3'>
            <div className="icon2">
               <i className="fa fa-video-camera"></i>
            </div>
            <div className="icon3">
               <i className="fa fa-bell"></i>
            </div>
            <div className="icon4">
               <img src="/images/vid.jpg" alt="Vidhya_logo" height='30px' width='30px' />
            </div>

         </div>


      </div>



   )
}