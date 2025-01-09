import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css["movie-list"]}>
      {movies.map((item, index) => (
        <li key={item.id}>
          <NavLink to={`/movies/${item.id}`} className={css["movie-link"]}>
            {index + 1}. <span className={css.title}>{item.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
