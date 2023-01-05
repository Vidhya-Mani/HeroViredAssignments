import React,{useEffect} from 'react';
import "./Container.css";


export default function Container() {
    useEffect(() => {
        let image1 = document.querySelector(".container")
        let image = image1.children;
        for (let i=0; i<image.length;i++){
            image[i].addEventListener("mouseenter", ()=>{
                image[i].style.border="3px solid black"
            })
        }
        for (let i=0; i<image.length;i++){
            image[i].addEventListener("mouseleave", ()=>{
                image[i].style.border="1px solid white"
            })
        }
    },[])
    return (
        <div className="container">
            <div className="card">
                <div className="image-card">
                   
                 <a href="https://www.youtube.com/watch?v=bRKIOgkUPpE"><img src="https://i.ytimg.com/vi/bRKIOgkUPpE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhO7Zquy0r2vjkpdAhbLJrnna0xQ" alt="vid1" /></a>

                </div>
                <div className="card-content">
                    <div className="text">
                        <img src="/images/vid.jpg" alt="vid1" srcset=""  />

                        <div className="names">
                            <span>Ten Most Amazing Things | <b>Impossible places</b> - Part 1 |Tamil Galatta News</span>
                            <p>Anbudan Vidhya</p>
                            {/* <h6>Anbudan Vidhya</h6> */}
                        </div>
                    </div>

                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=7wpDctYVkh4"><img src="https://i.ytimg.com/vi/7wpDctYVkh4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaJAonZa60kdBPcCktFaCoxLWgVA" alt="vidhya" srcset="" /></a>

                </div>
                <div className="card-content">
                   <div className="text">
                        <img src="/images/vid.jpg" alt="vid2" srcset=""  />

                        <div className="names">
                            <span>Ten Most <b>Amazing Things</b> | Tamil Galatta News | Interesting Facts In Tamil</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                
                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=ENG34o6CreI"><img src="https://i.ytimg.com/vi/ENG34o6CreI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVeUFh6SGxdcdJqJXSNAZIFirwlw" alt="" srcset="" /></a>

                </div>
                <div className="card-content">
                    <div className="text">
                        <img src="/images/vid.jpg" alt="vid3" srcset=""  />

                        <div className="names">
                            <span>WATCH this RESEARCH video Before eating <b>Junk food</b> | Junk food/ Fast food dangers in Tamil</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=Qd3CjdMKIdU"><img src="/images/depression.png" alt="" srcset="" /></a>

                </div>
                <div className="card-content">
                   <div className="text">
                        <img src="/images/vid.jpg" alt="vid4" srcset=""  />

                        <div className="names">
                            <span>Tips to Boost yourself in Tamil | <b>Be Happy, fight DEPRESSION </b>- Stay Motivated & Positive | Tamil</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=up3NN9jnqMw"><img src="/images/Normal_new.png" alt="" srcset="" /></a>

                </div>
                <div className="card-content">
                    <div className="text">
                        <img src="/images/vid.jpg" alt="vid5" srcset=""  />

                        <div className="names">
                            <span>SECRET for normal delivery <b>MOTHER's DAY</b> special!! | Tamil</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=JtevsI2nKgw"><img src="/images/transparent.png" alt="" srcset="" /></a>

                </div>
                <div className="card-content">
                    <div className="text">
                        <img src="/images/vid.jpg" alt="vid6" srcset=""  />

                        <div className="names">
                            <span>Amazing Incredible Creatures |<b>Transparent animals</b> | Tamil Galatta News</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=colBchExAn8"><img src="/images/Value.png" alt="" srcset="" /></a>

                </div>
                <div className="card-content">
                    <div className="text">
                        <img src="/images/vid.jpg" alt="vid7" srcset=""  />

                        <div className="names">
                            <span>Best Motivational Video | <b>Know your Value in Life</b> | Inspiring Story | Tamil</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="image-card">
                 <a href="https://www.youtube.com/watch?v=3-M-SPL6GZQ"><img src="/images/herbal.png" alt="" srcset="" /></a>

                </div>
                <div className="card-content">
                   <div className="text">
                        <img src="/images/vid.jpg" alt="vid8" srcset=""  />

                        <div className="names">
                            <span>Herbal drink to <b>Boost immunity for kids</b>| COVID & Black fungus| Homemade Herbal drink & steam| Kids</span>
                            <p>Anbudan Vidhya</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}