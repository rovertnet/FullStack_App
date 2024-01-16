import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Style/home.css';


function Accueil() {
  const imageSource1 = "./public/img/1.png";
  // const imageSource2 = "../../public/img/2.png";
  // const imageSource3 = "../../public/img/3.png";
  const imageAltText = "image alternante de slider";
  return (
    <Carousel className=''>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={imageSource1}
          alt={imageAltText}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageSource1}
          alt={imageAltText}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageSource1}
          alt={imageAltText}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Accueil