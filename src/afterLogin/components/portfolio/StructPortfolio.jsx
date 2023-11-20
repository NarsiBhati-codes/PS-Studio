import { useRef } from "react"
import "./structportfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"react Commerce",
        img:"https://images.pexels.com/photos/772520/pexels-photo-772520.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore doloribus inventore totam! Facilis eligendi id quos sed accusamus veritatis ipsa eius aliquam."
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore doloribus inventore totam! Facilis eligendi id quos sed accusamus veritatis ipsa eius aliquam."
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore doloribus inventore totam! Facilis eligendi id quos sed accusamus veritatis ipsa eius aliquam."
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/7420955/pexels-photo-7420955.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore doloribus inventore totam! Facilis eligendi id quos sed accusamus veritatis ipsa eius aliquam."
    }
]


const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} =useScroll({ 
        target: ref,
      });
    
    const y = useTransform(scrollYProgress,[0,1],[-300,300]);
    
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

function Portfolio() {
  
  const ref = useRef();

  const {scrollYProgress} =useScroll({ 
    target: ref,
    offset:["end end","start start"]
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
    
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar">
            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio