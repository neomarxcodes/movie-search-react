import Movie from "./ui/Movie";
import MovieSkeleton from "./ui/MovieSkeleton";

const Recommendations = ({ length, movies, isError }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(132px,1fr))]
				sm:grid-cols-[repeat(auto-fit,minmax(182px,1fr))]"
    >
      {movies?.length > 0 ? (
        movies
          .slice(0, length)
          .map((movie, i) => <Movie key={i} movie={movie} />)
      ) : isError ? (
        <h3 className="text-center text-3xl font-extralight">
          Error fetching movies
        </h3>
      ) : (
        new Array(6).fill(null).map((_, i) => <MovieSkeleton key={i} />)
      )}
    </div>
  );
};

export default Recommendations;
