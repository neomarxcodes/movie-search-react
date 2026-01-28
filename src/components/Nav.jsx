import { Menu, Search, UserCircle, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ setSrcParamFn }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navInputRef = useRef(null);
  const location = useLocation();

  return (
    <>
      <nav
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-between items-center w-full max-w-370 px-10
			sm:px-20"
      >
        <div className="z-10 flex items-center gap-8">
          <Link
            to="/"
            className={`transition-opacity duration-400
							${isInputFocused && "max-xs:pointer-events-none max-xs:opacity-0"}`}
          >
            <img
              src="/movielogo.png"
              alt="Ticket pluss logo"
              className="invert-90 w-full max-w-16 mr-4"
            />
          </Link>
          <Link
            to="/"
            className={`nav-link hidden
							sm:block
							${location.pathname === "/" && "text-accent border-accent"}`}
          >
            Home
          </Link>
          <Link
            to="/#contact"
            className="nav-link hidden
					sm:block"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4 relative py-6">
          <button
            type="button"
            aria-label="Open search"
            className="absolute left-2 cursor-pointer"
            onClick={() => navInputRef.current.focus()}
          >
            <Search />
          </button>
          <input
            type="text"
            placeholder="Find a movie"
            ref={navInputRef}
            onKeyUp={setSrcParamFn}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className="bg-none w-0 border-2 border-transparent rounded-full outline-none py-3 pr-1 pl-8 text-sm cursor-default transition-all duration-400
						focus:w-40 focus:border-secondary focus:cursor-text md:focus:w-60"
          />
          <button
            type="button"
            aria-label="Open menu"
            className="cursor-pointer"
            onClick={() => {
              setIsNavMenuOpen(true);
            }}
          >
            <Menu />
          </button>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Close menu"
        className={`absolute z-11 inset-0
					${!isNavMenuOpen && "invisible"}`}
        onClick={() => {
          setIsNavMenuOpen(false);
        }}
      />

      <nav
        className={`bg-primary fixed right-0 z-12 top-0 h-full w-70 shadow-[-20px_0_25px_-5px] shadow-shadow text-end transition-all duration-300
					${!isNavMenuOpen && "invisible translate-x-full"}`}
      >
        <div className="shadow-lg shadow-shadow flex justify-between w-full border-l-2 border-accent text-4xl text-accent p-6">
          <h3>Menu</h3>

          <button
            type="button"
            aria-label="Close menu"
            className="cursor-pointer"
            onClick={() => {
              setIsNavMenuOpen(false);
            }}
          >
            <X size={40} />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-8 p-6">
            <Link
              to="/"
              className={`nav-link
								${location.pathname === "/" && "text-accent border-accent"}`}
            >
              Home
            </Link>
            <Link to="/#contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-8 p-6 pb-30">
            <Link to="/" className="nav-link flex justify-end gap-2">
              <UserCircle /> Profile
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
