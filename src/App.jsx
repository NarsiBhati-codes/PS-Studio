import {Contact, CustomerReview, Footer, Hero,Services,} from "./sections"

import { Nav} from "./components"
import About from './sections/About';

function App() {
  return (
     <main className="relative ">
        <Nav/>
        <section id="home" className="scroll-snap-align-center overflow-hidden">
          <Hero/>
        </section>
        <div className="scroll-snap-align-center">
          <Services/>
        </div>
        <section id="about-us"> 
          <About/>
        </section>
        <section id="testimonials" className="bg-pale-blue scroll-snap-align-center">
          <CustomerReview/> 
        </section>
        <section id="contact" className="scroll-snap-align-center">
          <Contact/>
        </section>
        <div className="bg-black pt-16 ">
           <Footer/>
        </div>
     </main>
  )
}

export default App
