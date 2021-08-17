import React, { Component } from 'react';
import "./FilmsCarousel.css";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* FilmsCarousel */
/* FilmsCarousel.js=> Creates image carousel for images */

/* @desc CarouselLeftArrow => renders left arrow For sliding left */
class CarouselLeftArrow extends Component {
    render() {
      return (
        <a href="#0"
          className="carouselArrow carouselArrowLeft"
          onClick={this.props.onClick}>
          <span className="leftRocketFa" title="More on Left"><FontAwesomeIcon icon={faRocket} size='3x' /> </span>
        </a>
      );
    }
  }
  
  /* @desc CarouselRightArrow => renders right arrow For sliding right */
  class CarouselRightArrow extends Component {
    render() {
      return (
        <a
          href="#0"
          className="carouselArrow carouselArrowRight"
          onClick={this.props.onClick}>
          <span className="leftRocketFa" title="More on Right"><FontAwesomeIcon icon={faRocket} size='3x' /> </span>
        </a>
      );
    }
  }
  
  /* @desc CarouselIndicator => renders position indicator */
  class CarouselIndicator extends Component {
    render() {
      return (
        <li>
          <button          
            className={
              this.props.index === this.props.activeIndex
                ? "carouselIndicator carouselIndicatorActive"
                : "carouselIndicator"
            }
            onClick={this.props.onClick}
          ></button>
        </li>
      );
    }
  }
  /* @desc CarouselSlide => renders carousel slide content, title and source */
  class CarouselSlide extends Component {
    render() {
      return (
        <li
          className={
            this.props.index === this.props.activeIndex
              ? "carouselSlider carouselSliderActive"
              : "carouselSlider"
          }
        >
          <p className="carousel-slideContent">{this.props.slide.content}</p>
  
          <p>
            <strong className="carousel-slideTitleData">
              {this.props.slide.titleData}
            </strong>,
            {" "}
            <small className="carousel-slideSource">
              {this.props.slide.source}
            </small>
          </p>
        </li>
      );
    }
  }
  
  /* @desc FilmsCarousel => Carousel wrapper component */
  class FilmsCarousel extends Component {
    constructor(props) {
      super(props);
  
      this.goToSlide = this.goToSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
      this.state = {
        activeIndex: 0
      };
    }
  
    goToSlide(index) {
      this.setState({
        activeIndex: index
      });
    }
  
    goToPrevSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { slides } = this.props;
      let slidesLength = slides.length;
  
      if (index < 1) {
        index = slidesLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { slides } = this.props;
      let slidesLength = slides.length - 1;
  
      if (index === slidesLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    render() {
      return (
        <div className="carousel">
          <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
  
          <ul className="carouselSliders">
            {this.props.slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </ul>
  
          <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
  
          <ul className="carouselIndicators">
            {this.props.slides.map((slide, index) =>
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex===index} 
                onClick={e => this.goToSlide(index)}
              />
            )}
          </ul>
        </div>
      );
    }
  }

  export default FilmsCarousel;
  