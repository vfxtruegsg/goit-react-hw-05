import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <ul className={css["gallery-list"]}>
      {articles.map(({ alt_description, id, urls: { small, regular } }) => (
        <li key={id}>
          <ImageCard
            small={small}
            regular={regular}
            alt_description={alt_description}
            onImageClick={() =>
              onImageClick({ modalImg: regular, altDescr: alt_description })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
