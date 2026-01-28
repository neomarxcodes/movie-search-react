import axios from "axios";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviePageSkeleton from "../components/MoviePageSkeleton";
import Nav from "../components/Nav";
import Recommendations from "../components/Recommendations";

const MoviePage = ({ setSrcParamFn, movies, setIsError, isError }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      try {
        window.scrollTo(0, 0);
        setMovie();
        setIsError(false);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=1a272334&i=${movieId}`,
        );
        setTimeout(() => setMovie(data), 500);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    })();
  }, [movieId, setIsError]);

  return (
    <>
      <div className="nav-wrapper">
        <Nav setSrcParamFn={setSrcParamFn} />
      </div>

      {movie ? (
        <section
          className="relative flex flex-col justify-center items-center gap-4 my-20 py-20 text-center font-light
				sm:flex-row sm:text-left"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="absolute -z-1 w-full h-full object-cover opacity-50 blur-lg"
          />

          <img
            src={movie.Poster}
            alt={movie.Title}
            className="max-w-50 h-fit w-full mx-10 rounded-lg shadow-lg shadow-shadow
						sm:max-w-70"
          />

          <div
            className="flex flex-col items-center gap-4 max-w-200 mx-10
					sm:items-start"
          >
            <h1 className="text-[min(7vw,32px)]">{movie.Title}</h1>

            <div className="flex gap-4 text-[min(4vw,16px)]">
              <p>{movie.Released}</p>
              <p>{movie.Runtime}</p>
              <p>{movie.imdbRating}/10</p>
            </div>

            <p className="text-[min(4vw,16px)]">{movie.Plot}</p>

            <button
              type="button"
              className="bg-primary shadow-accent flex justify-center gap-2 w-50 border-2 border-accent rounded-full p-2 cursor-pointer transition duration-200
							hover:shadow-[0_0_15px] hover:scale-102"
            >
              <Play /> Watch
            </button>
          </div>
        </section>
      ) : isError ? (
        <h3>Error loading movie</h3>
      ) : (
        <MoviePageSkeleton />
      )}

      <section className="recommendations-container">
        <h2 className="recommendations-header">Similar movies</h2>
        <Recommendations length={6} movies={movies} isError={isError} />
      </section>
    </>
  );
};

export default MoviePage;
