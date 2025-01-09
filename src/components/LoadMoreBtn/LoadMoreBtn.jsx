import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ click }) => {
  return (
    <button className={css["load-more-btn"]} onClick={click}>
      Load More!
    </button>
  );
};

export default LoadMoreBtn;
