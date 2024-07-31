import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const [panels, setPanels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const query = encodeURIComponent(`*[_type == "panel"]{
      _id,
      title,
      "mainImageUrl": mainImage.asset->url,
      
    }`);

    const url = `https://lk48nlsu.api.sanity.io/v1/data/query/panels?query=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPanels(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const firstFivePanels = panels.slice(0, 5);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === firstFivePanels.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? firstFivePanels.length - 1 : prevIndex - 1
    );
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 3000);
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
    <section className="slider">
      <div className="slider__carousel">
        <button
          className="slider__btn slider__btn--prev"
          onClick={handlePrevClick}
        >
          &#10094;
        </button>
        {firstFivePanels.map((panel, index) => (
          <div
            key={panel._id}
            className={`slider__panel ${index === currentIndex ? "active" : ""}`}
          >
            <img
              src={panel.mainImageUrl}
              alt={panel.title}
              className="slider__panel--img"
            />
            <h1 className="slider__panel--heading">{panel.title}</h1>
          </div>
        ))}
        <button
          className="slider__btn slider__btn--next"
          onClick={handleNextClick}
        >
          &#10095;
        </button>
      </div>

      <Link className="slider__cta--btn" to={"/panouri"}>
        Descoperă mai multe modele
      </Link>
    </section>
  );
}

export default Slider;
