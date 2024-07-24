import { Link } from "react-router-dom";
import useImageGalleryData from "../useImageGalleryData";
import Masonry from "react-masonry-css";

function Gallery() {
  const { imageGallery } = useImageGalleryData();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
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
  );
}

export default Gallery;
