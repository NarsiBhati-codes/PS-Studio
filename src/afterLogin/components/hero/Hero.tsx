import { Models } from "appwrite";
import "./hero.scss"
import React from "react";
import { userStore } from '../../../state/userStore';

function Hero() {
    const user = userStore(
        (state) => state.user
    ) as Models.User<Models.Preferences>;
      
  return (
    <div className="hero">
        <div className="wrapper">
          <div 
            className="textContainer" 
          >
                <h2>{user.name}</h2>
                <h1></h1>
                <div  className="buttons">
                    <button >See the Latest Works</button>
                    <button  >Contact Me</button>
                </div>
                 <img  
                    src="./scroll.png" 
                    alt=""
                 />
            </div>
        </div>
        <div className="slidingTextContainer">
            Developer Creator 
        </div>
        <div className="imageContainer">
            <img src="./hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero;

