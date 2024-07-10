import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { movie, setMovie, fetchMovieDetails, formatDuration, imdbID } =
    useContext(DataContext);

  const navigate = useNavigate();
  useEffect(() => {
    setMovie(null);
    fetchMovieDetails(imdbID);
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="h-10 w-10 text-2xl  border-[#4caf50] border-[2px] mb-4 rounded-md"
      >
        {"<"}
      </button>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  rounded ">
        {movie && (
          <>
            <img
              src={movie?.Poster}
              className="rounded-md w-96 md:w-72 lg:w-72 xl:w-72 object-cover object-top overflow-hidden"
              alt={movie.Title}
            />
            <div className="p-4 ">
              <div className="ml-2">
                <h1 className="text-3xl">{movie.Title}</h1>
                <div className="flex gap-4">
                  <p className="text-sm">{movie.Year}</p>
                  <p className="text-sm">{formatDuration(movie.Runtime)}</p>
                </div>
              </div>
              <div className="text-sm my-2 ">
                {movie.Genre.split(",").map((genre, index) => (
                  <p
                    key={index}
                    className="inline-block rounded-full p-2 px-4 border m-1"
                  >
                    {genre.trim()}
                  </p>
                ))}
              </div>
              <div className="text-sm ml-2">
                <p className="my-4 text-lg">{movie.Plot}</p>
                <p className="text-sm">{movie.Actors}</p>
                <div className=" flex justify-between items-center mt-4">
                  <div className="border border-stone-800 rounded-md mt-4 inline-block p-5">
                    <p className="inline-block mr-6">Director</p>
                    <span className="text-sm">{movie.Director}</span>
                  </div>
                  <div className="flex flex-col text-center">
                    <div className="flex items-center gap-2">
                      <svg
                        class="h-8 w-8 text-yellow-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-lg ">{movie.imdbRating}/10</span>
                        <p className="text-xs">{movie.imdbVotes} votes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
