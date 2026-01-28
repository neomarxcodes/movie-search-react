import { ChevronLeft, ChevronRight } from "lucide-react";
import Nav from "../components/Nav";
import Recommendations from "../components/Recommendations";
import SearchBar from "../components/ui/SearchBar";

const SearchPage = ({
  setSrcParamFn,
  srcParam,
  movies,
  setPage,
  page,
  isError,
}) => {
  return (
    <>
      <div className="nav-wrapper">
        <Nav setSrcParamFn={setSrcParamFn} />
      </div>

      <section className="recommendations-container my-30">
        <div
          className="flex flex-col items-center
					lg:flex-row lg:justify-between"
        >
          <h2
            className="recommendations-header flex flex-col justify-center items-center gap-2 mt-10
						lg:flex-row lg:justify-start lg:gap-6 lg:mt-0"
          >
            Search results for:
            <span className="colored-text text-shadow-[0_0_10px,0_0_10px] text-shadow-accent border-b border-accent py-2">
              {srcParam}
            </span>
          </h2>
          <SearchBar setSrcParamFn={setSrcParamFn} />
        </div>
        <Recommendations length={10} movies={movies} isError={isError} />
        <div className="flex justify-center items-center gap-8 text-3xl">
          <button
            type="button"
            aria-label="Previous page"
            disabled={page < 2}
            onClick={() => setPage(page - 1)}
            className={`${page < 2 ? "opacity-40 cursor-default" : "cursor-pointer hover:text-accent"}`}
          >
            <ChevronLeft size={40} />
          </button>
          {page}
          <button
            type="button"
            aria-label="Next page"
            disabled={movies?.length < 10}
            onClick={() => setPage(page + 1)}
            className={`${movies?.length < 10 ? "opacity-40 cursor-default" : "cursor-pointer hover:text-accent"}`}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
