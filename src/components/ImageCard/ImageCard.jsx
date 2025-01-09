import css from "./ImageCard.module.css";

const ImageCard = ({ small, alt_description, onImageClick }) => {
  return (
    <div>
      <img
        className={css["img-card"]}
        src={small}
        alt={alt_description}
        onClick={onImageClick}
      />
    </div>
  );
};

export default ImageCard;
