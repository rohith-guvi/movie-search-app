import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import TypeFilter from "./TypeFilter";

const Movies = () => {
  const { movies, setImdbID } = useContext(DataContext);

  const navigate = useNavigate();
  const handleMovieClick = (id) => {
    setImdbID(id);
    navigate("/" + id);
  };

  return (
    <div className="p-4">
      <TypeFilter />
      {movies ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8">
          {movies?.map((movie) => (
            <div
              key={movie.imdbID}
              className="flex flex-col justify-center border border-stone-800 rounded"
              onClick={() => handleMovieClick(movie.imdbID)}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="rounded-md h-96 w-full object-cover object-top overflow-hidden"
              />

              <div className="flex flex-col justify-center items-center gap-y-2 mt-4">
                <p className="text-white text-center">{movie.Title}</p>
                <p className="text-[#4caf50] text-center mb-2 font-bold">
                  {movie.Year}
                </p>
                <p className="rounded-full border px-3 py-1 mb-4">
                  {movie.Type}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
          <p className="text-gray-200 text-center text-lg">
            Search for a movie
          </p>
        </div>
      )}
    </div>
  );
};

export default Movies;
