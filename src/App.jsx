import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [srcParam, setSrcParam] = useState("Avengers");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const setSrcParamFn = (e, inputRef) => {
    if (e.type === "click") {
      setSrcParam(inputRef.current.value);
      if (location.pathname !== "/search") navigate("/search");
    } else if (e.key === "Enter") {
      setSrcParam(e.target.value);
      if (location.pathname !== "/search") navigate("/search");
    }
  };

  useEffect(() => {
    setPage(1);
  }, [srcParam]);

  useEffect(() => {
    (async () => {
      try {
        setMovies([]);
        setIsError(false);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=1a272334&s=${srcParam}&page=${page}`,
        );
        setTimeout(() => setMovies(data.Search), 500);
        data.Search.slice(0, 10);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    })();
  }, [srcParam, page]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setSrcParamFn={setSrcParamFn}
              setSrcParam={setSrcParam}
              movies={movies}
              isError={isError}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              setSrcParamFn={setSrcParamFn}
              srcParam={srcParam}
              movies={movies}
              setPage={setPage}
              page={page}
              isError={isError}
            />
          }
        />
        <Route
          path="/movie/:movieId"
          element={
            <MoviePage
              setSrcParamFn={setSrcParamFn}
              movies={movies}
              setIsError={setIsError}
              isError={isError}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
