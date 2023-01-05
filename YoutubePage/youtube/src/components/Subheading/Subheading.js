import React,{useEffect} from 'react';
import "./Subheading.css"

export default function Subheading() {
   useEffect(() => {
      let sidebar = document.querySelector(".items")
      let childsidebar = sidebar.children;
      for (let i=0; i<childsidebar.length;i++){
          childsidebar[i].addEventListener("mouseenter", ()=>{
              childsidebar[i].style.backgroundColor="#909090"
          })
      }
      for (let i=0; i<childsidebar.length;i++){
          childsidebar[i].addEventListener("mouseleave", ()=>{
              childsidebar[i].style.backgroundColor="#dbdbdb"
          })
      }
  },[])
   return (
      <div className="subheading">
         <div className="items">
            <div className='all'>All</div>
            <div>Mixes</div>
            <div>Melodies</div>
            <div>Mantras</div>
            <div>One Direction</div>
            <div>Computer programming</div>
            <div>Live</div>
            <div>Playlists</div>
            <div>Chill-out music</div>
            <div>AI</div>
            <div>Love songs</div>
            <div>Tamil Cinema</div>
            <div>Gaming</div>
            <div>Motivation</div>
            {/* <div>Motivation</div> */}
            
         </div>

      </div>

   )
}