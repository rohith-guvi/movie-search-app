import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const Header = () => {
  const { searchQuery, setSearchQuery, fetchMovies } = useContext(DataContext);
  const location = useLocation();

  return (
    <header className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 px-5 py-2 justify-between items-center pt-8">
      <div>
        <h1 className="text-md md:text-lg lg:text-2xl xl:text-3xl">
          Movie Search App
        </h1>
      </div>
      {location.pathname === "/" && (
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3  justify-between items-center">
          <input
            type="search"
            placeholder="Search Movie"
            value={searchQuery}
            className="h-10 mx-4 text-black w-72 outline-none rounded-md p-2"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => fetchMovies(searchQuery)}
            className="inline-block h-10 px-4 text-center rounded-md bg-[#4caf50]"
          >
            Search
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
