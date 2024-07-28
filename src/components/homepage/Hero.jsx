import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../Loader";

const sliderImages = [
  { id: 1, src: "/assets/images/6.jpeg" },
  { id: 2, src: "/assets/images/7.jpeg" },
  { id: 3, src: "/assets/images/3.jpeg" },
  { id: 4, src: "/assets/images/4.jpeg" },
  { id: 5, src: "/assets/images/5.jpeg" },
  { id: 6, src: "/assets/images/9.jpeg" },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  });

  const handleNextClick = () => {
    nextSlide();
    resetInterval();
  };

  const handlePrevClick = () => {
    prevSlide();
    resetInterval();
  };

  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Panouri metalice</h1>
        <div className="hero__content--h4">
          <h4>Frumusețe de durată</h4>
          <h4>Greutate redusă</h4>
          <h4>Instalare rapidă</h4>
          <h4>Impermeabile</h4>
        </div>
      </div>
      <InfiniteScroll pageStart={0} loader={<Loader />}>
        <div className="hero__carousel">
          <button
            className="hero__button hero__button--prev"
            onClick={handlePrevClick}
          >
            &#10094;
          </button>
          <div className="hero__slide-container">
            {sliderImages.map((img, index) => (
              <img
                key={img.id}
                src={img.src}
                alt=""
                className={`hero__img ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <button
            className="hero__button hero__button--next"
            onClick={handleNextClick}
          >
            &#10095;
          </button>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Hero;
