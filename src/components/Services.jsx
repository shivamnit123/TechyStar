import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/6.avif";
import img4 from "../assets/5.avif";
import img5 from "../assets/7.avif";
const Services = () => {
  return (
        <Carousel   infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}>
           <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Best Services</p>
        </div>
        <div>
          <img src={img4} alt="Item3" />
          <p className="legend">Web Designs</p>
        </div>
        <div>
          <img src={img5} alt="Item3" />
          <p className="legend">Large Network</p>
        </div>
        </Carousel>
  )
}

export default Services