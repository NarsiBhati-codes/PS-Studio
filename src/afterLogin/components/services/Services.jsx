import { useRef } from "react"
import "./services.scss"
import {motion, useInView} from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        y: 0,
        transition: {
            duration:1,
            staggerChildren:0.1,
        },
    },
}

function Services() {

  const ref = useRef()
  
  const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
        className="services"
        variants={variants} 
        initial="initial" 
        ref={ref}
        animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow 
            <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique </motion.b> ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}} >For Your </motion.b> Business
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2 contentEditable >Custom MERN stack application development</h2>
                <p contentEditable>
                    This involves developing web applications from scratch using the MERN stack. This can include building everything from simple CRUD (create, read, update, delete) applications to complex enterprise-level applications.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2 contentEditable>MERN stack web development</h2>
                <p contentEditable>
                    This involves developing the front-end and back-end of web applications using the MERN stack. This can include developing the user interface (UI) using React, the application programming interface (API) using Express, and the database using MongoDB.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services