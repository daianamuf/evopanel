import { useLocation, Link } from "react-router-dom";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import useImageGalleryData from "../../useImageGalleryData";

function Slideshow() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const startIndex = Number(queryParams.get("index"));
  console.log(startIndex);
  const { imageGallery } = useImageGalleryData();
  if (isNaN(startIndex) || startIndex < 0 || startIndex >= imageGallery.length)
    return null;

  const galleryItems = imageGallery.map((image) => ({
    original: image.image,
  }));
  return (
    <div className="slideshow__wrapper">
      <ImageGallery
        items={galleryItems}
        startIndex={startIndex}
        originalClass={"image"}
        showPlayButton={false}
      />
      <Link to="/galerie" className="slideshow__close">
        <p>X</p>
      </Link>
    </div>
  );
}

export default Slideshow;
