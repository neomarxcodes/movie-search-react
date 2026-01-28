import { Search } from "lucide-react";
import { useRef } from "react";

const SearchBar = ({ setSrcParamFn }) => {
  const inputRef = useRef(null);

  return (
    <div className="relative mt-10 mb-15">
      <input
        type="text"
        placeholder="Find a movie"
        ref={inputRef}
        onKeyUp={setSrcParamFn}
        className="bg-none text-xl border-2 border-secondary rounded-full outline-none w-64 py-4 px-8 transition duration-300
				focus:shadow-[0_0_8px] focus:shadow-accent focus:scale-102 xs:w-full xs:py-6 xs:pr-16 xs:pl-8"
      />

      <Search
        size={30}
        className="text-2xl absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer transition duration-300
				hover:scale-105"
        onClick={(e) => setSrcParamFn(e, inputRef)}
      />
    </div>
  );
};

export default SearchBar;
