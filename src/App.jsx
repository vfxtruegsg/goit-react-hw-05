import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Puff } from "react-loader-spinner";
import css from "./App.module.css";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Suspense
        fallback={
          <div className={css.fallback}>
            <Puff color="#611f1f" />
          </div>
        }
      >
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
