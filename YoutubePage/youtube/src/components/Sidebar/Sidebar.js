import React,{useEffect} from 'react';
import "./Sidebar.css";

export default function Sidebar() {
    useEffect(() => {
        let sidebar = document.querySelector(".icons")
        let childsidebar = sidebar.children;
        for (let i=0; i<childsidebar.length;i++){
            childsidebar[i].addEventListener("mouseenter", ()=>{
                childsidebar[i].style.backgroundColor="#dbdbdb"
            })
        }
        for (let i=0; i<childsidebar.length;i++){
            childsidebar[i].addEventListener("mouseleave", ()=>{
                childsidebar[i].style.backgroundColor="white"
            })
        }
    },[])
    return (
        <div className="side_menu">
            <div className='icons'>
                <div class="home" >
                     <i class="fa fa-home"></i>
                     <span>Home</span>
                </div>
                <div class="shorts">
                     <img src="/images/shorts.png" alt="shorts_logo" height='30px' width='40px' />
                     <span>Shorts</span>
                </div>
                <div class="subscribe">
                     <img src="/images/sub.png" alt="subscribe_logo" height='20px' width='20px' />
                     <span>Subscriptions</span>
                    {/* <span><u style={{color:"red"}}>Subscriptions</u></span> */}

                </div>
                         <span>__________________</span>

                
                <div class="library">
                 {/* <img src="/images/lib.png" alt="library_logo" height='20px' width='20px' /> */}
                 <i class="fa fa-clone"></i>
                 <span>Library</span>
                </div>
                <div class="history">
                    <i class="fa fa-history"></i>
                    <span>History</span>
                </div>
                <div class="watch">
                    <i class="fa fa-clock-o"></i>
                    <span>Watch later</span>
                </div>
                <div class="liked">
                    <i class="fa fa-thumbs-o-up"></i>
                    <span>Liked videos</span>
                </div>
                      <span>__________________</span>
                {/* <div> */}
                    <p>Subscriptions</p>
                {/* </div> */}
                <div class="anbudan">
                   <img src="/images/vid.jpg" alt="Vidhya_logo" height='20px' width='20px' />
                    <span>Anbudan Vidhya</span>
                </div>
                <div class="yubi">
                   <img src="/images/yubi.jpg" alt="Yubi_logo" height='20px' width='20px' />
                    <span>YUBI</span>
                </div>
                <div class="browse">
                    <i class="fa fa-plus-circle"></i>
                    <span>Browse channels</span>
                </div>

                {/* <div> */}
                     <span>__________________</span>

                    <p className='para'>Explore</p>
                {/* </div> */}
                <div>
                    <i class="fa fa-fire"></i>
                    <span>Trending</span>
                </div>
                <div>
                    <i class="fa fa-music"></i>
                    <span>Music</span>
                </div>
                <div>
                    <i class="fa fa-film"></i>
                    <span>Films</span>
                </div>
                <div>
                    <i class="fa fa-wifi"></i>
                    <span>Live</span>
                </div>
                <div>
                    <i class="fa fa-gamepad"></i>
                    <span>Gaming</span>
                </div>
                <div>
                    <i class="fa fa-newspaper-o"></i>
                    <span>News</span>
                </div>
                <div>
                    <i class="fa fa-trophy"></i>
                    <span>Sport</span>
                </div>
                <div>
                    <i class="fa fa-lightbulb-o"></i>
                    <span>Learning</span>
                </div>
                <div>
                    <i class="fa fa-female"></i>
                    <span>Fashion & beauty</span>
                </div>
           </div>
        </div>


    )
}