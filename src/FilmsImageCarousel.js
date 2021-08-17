import React from "react";
import './FilmsImageCarousel.css';
import image1 from './movies/A-New-Hope.jpg';
import image2 from './movies/The-Empire-Strikes-Back.jpg';
import image3 from './movies/Return-of-the-Jedi.jpg';
import image6 from './movies/Revenge-of-the-Sith.jpg';
import FilmsCarousel from './FilmsCarousel.js';

/* FilmsImageCarousel */
/* FilmsImageCarousel.js => provides Films Image content and Image Carousel for Character Films Images */

const carouselSlidesData = [
    {
      content:
        <img  src={image1} title="A New Hope" className="sliderimg" alt="A New Hope movie poster"/>,
      titleData: "A New Hope",
      source: "STAR WARS"
    }, {
      content:
        <img  src={image2} title="The Empire Strikes Back" className="sliderimg" alt="The Empire strikes back movie poster"/>,
      titleData: "The Empire Strikes Back",
      source: "STAR WARS"
    }, {
      content:
        <img  src={image3} title="Return of the Jedi" className="sliderimg" alt="Return of the Jedi movie poster"/>,
      titleData: "Return of the Jedi",
      source: "STAR WARS"
    }, {
      content:
        <img  src={image6} title="The Empire Strikes Back" className="sliderimg" alt="Revenge of the Sith Movie Poster"/>,
      titleData: "Revenge of the Sith",
      source: "STAR WARS"
    }
  ];

const FilmsImageCarousel = () => {
  return (
      <div className="ImageCarousel">
         <FilmsCarousel slides={carouselSlidesData}/>
    </div>
  );
}

export default FilmsImageCarousel;