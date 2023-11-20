import {motion} from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { userStore } from "../../../state/userStore";
import { Models } from "appwrite";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = userStore(
    (state) => state.user
  ) as Models.User<Models.Preferences>;
  
  return (
    <div className="navbar">
       <Sidebar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0.5, scale:0.5}}
                animate= {{opacity:1,scale:1}}
                transition={{duration:0.5}} >
                <Link to="/Home" >
                {user.name}
                </Link> 
            </motion.span>
             <div className="social">
                <a href=""> <img src="/facebook.png" alt="" /> </a>
                <a href=""> <img src="/instagram.png" alt="" /> </a>
                <a href=""> <img src="/youtube.png" alt="" /> </a>
                <a href=""> <img src="/dribbble.png" alt="" /> </a>
             </div>
        </div>
    </div>
  )
}

export default Navbar
