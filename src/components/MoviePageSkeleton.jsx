const MoviePageSkeleton = () => {
  return (
    <section
      aria-busy="true"
      aria-label="Loading movie details"
      className="skeleton relative flex flex-col justify-center items-center gap-4 my-20 py-20
				sm:flex-row"
    >
      <div className="skeleton-gradients absolute -z-1 w-full h-full" />

      <div
        className="skeleton max-w-50 w-full aspect-2/3 mx-10 rounded-lg
						sm:max-w-70"
      >
        <div className="skeleton-gradients " />
      </div>

      <div
        className="flex flex-col items-center gap-4 max-w-200 w-full mx-10
					sm:items-start"
      >
        <div className="skeleton w-50 h-10">
          <div className="skeleton-gradients" />
        </div>

        <div className="skeleton w-60 h-5">
          <div className="skeleton-gradients" />
        </div>

        <div className="skeleton w-[calc(100%-80px)] h-20">
          <div className="skeleton-gradients" />
        </div>
      </div>
    </section>
  );
};

export default MoviePageSkeleton;
