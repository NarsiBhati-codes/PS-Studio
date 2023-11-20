import "./sidebar.scss";
import {motion} from "framer-motion"
import Links from "./links/Link";
import ToggleButton1 from "./toggleButton/ToggleButton1";
import { useState } from "react";

const variants = {
  open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
          delay:0.1,
          type: "spring",
          stiffness:50,
          damping:40,
      }
  },
  closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
          delay:0.3,
          type: "spring",
          stiffness:200,
          damping:40,
      }
  }
}

function Sidebar() {
  const [open ,setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} >
        <motion.div className="bg" variants={variants}>
            <Links/>    
        </motion.div>
        <ToggleButton1 setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar