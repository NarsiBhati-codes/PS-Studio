import { useRef } from "react"
import "./structportfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"react Commerce",
        img:"https://images.pexels.com/photos/4495408/pexels-photo-4495408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Elevating shopping experiences through cutting-edge technology and seamless interfaces. Explore, shop, and enjoy the convenience of an intuitive platform designed to redefine online retail."
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"Creating a blog with Next.js offers an exceptional platform to craft dynamic, SEO-friendly, and performant websites. Its hybrid nature allows server-side rendering and static site generation, delivering rapid page loads and an engaging user experience. With Next.js, you can effortlessly build a feature-rich, customizable blog, harnessing the power of React while ensuring optimal performance and SEO capabilities."
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"A Vanilla JS app uses pure JavaScript without external libraries or frameworks, offering control and efficiency for small to medium-sized projects."
    },
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
                        <h2 contentEditable>{item.title}</h2>
                        <p contentEditable>{item.desc}</p>
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