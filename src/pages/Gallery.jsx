import { Link } from "react-router-dom";
import useImageGalleryData from "../useImageGalleryData";
import Masonry from "react-masonry-css";
import { Helmet } from "react-helmet-async";

function Gallery() {
  const { imageGallery } = useImageGalleryData();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <>
      <Helmet>
        <title>Galerie de Proiecte | Evosiding România</title>
        <meta
          name="description"
          content="Vizualizați galeria noastră de proiecte finalizate folosind panouri sandwich metalice de la Evosiding. Inspirați-vă din lucrările noastre de calitate în București și în toată România."
        />
        <meta
          name="keywords"
          content="galerie proiecte, panouri sandwich, București, EvoSiding, construcții, panouri metalice, casa, design"
        />
      </Helmet>
      <section className="gallery">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imageGallery.map((image, index) => (
            <Link
              key={image.id}
              to={`/slideshow?index=${index}`}
              className="gallery__link"
            >
              <img className="gallery__img" src={image.image} alt={image.id} />
            </Link>
          ))}
        </Masonry>
      </section>
    </>
  );
}

export default Gallery;
