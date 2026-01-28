import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Movie = ({ movie: { Poster, Title, Year, imdbID } }) => {
  return (
    <figure className="relative group max-w-50 shadow-lg shadow-shadow m-2 rounded-lg overflow-hidden cursor-pointer">
      <Link to={`/movie/${imdbID}`}>
        <img
          src={Poster}
          alt={Title}
          className="w-full h-full object-cover transition duration-400
					group-hover:blur-xs group-hover:opacity-50 group-hover:scale-105"
        />

        <div
          className="flex flex-col justify-between absolute inset-0 my-6 mx-4 opacity-0 transition duration-400
				group-hover:opacity-100"
        >
          <h3
            className="text-xs
					xs:text-base md:text-xl"
          >
            {Title}
          </h3>

          <div
            className="flex justify-between items-center
					xs:mb-4 md:mb-9"
          >
            <Clock className="w-4 xs:w-5" />
            <p
              className="font-semibold text-xs
						xs:text-base"
            >
              {Year}
            </p>
          </div>
        </div>
      </Link>
    </figure>
  );
};

export default Movie;
