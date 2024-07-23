import { Link } from "react-router-dom";
import useImageGalleryData from "../useImageGalleryData";

function Gallery() {
  const { imageGallery } = useImageGalleryData();

  return (
    <section className="gallery">
      {imageGallery.map((image) => (
        <Link
          key={image.id}
          to={`/slideshow?index=${image.id}`}
          className="gallery__link"
        >
          <img className="gallery__img" src={image.image} />
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
