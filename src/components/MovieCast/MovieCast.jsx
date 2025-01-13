import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovie } from "../../api-query";
import toast from "react-hot-toast";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const queryMovieCast = async () => {
      try {
        setLoader(true);
        const {
          data: { cast },
        } = await getCastMovie(moviesId);

        setCastMovie(cast);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    };
    queryMovieCast();
  }, [moviesId]);

  return (
    <div>
      {loader && <p className={css["no-reviews-err"]}>Wait...</p>}
      {castMovie.length && (
        <ul className={css["actor-list"]}>
          {castMovie.map((item, index) => (
            <li key={index}>
              <div className={css["actor-container"]}>
                <p>
                  <strong>Role:</strong> {item.character} -{" "}
                  <strong>Actor:</strong> {item.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
