import React from 'react'
import "./Portfolio.scss";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Parallax from "../../components/parallax/Parallax";
import Services from "../../components/services/Services";
import StructPortfolio from '../../components/portfolio/StructPortfolio';
import Contact from "../../components/contact/Contact";

const Portfolio = () => {
  return (
    <div id="portfolio1">
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section id="Services">
      <Parallax type="services"/>
    </section>

    <section>
      <Services/>
    </section>

    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <StructPortfolio/>
    <section id="Contact">
      <Contact/>  
    </section>
   </div>
  )
}

export default Portfolio
