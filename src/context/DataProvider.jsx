import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState();
  const [imdbID, setImdbID] = useState();
  const [type, setType] = useState("all");
  const [options, setOptions] = useState(["all", "movie", "series", "episode"]);

  const fetchMovies = async (searchQuery) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchQuery}&apikey=280d9187`
    );
    setMovies(response.data.Search);
  };

  const fetchMovieDetails = async (id, type) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&type=${type}&apikey=280d9187`
    );
    const data = await response.json();
    console.log(data);
    setMovie(data);
  };

  const filterMovies = async (filter) => {
    if (type === "all") {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=280d9187`
      );
      setMovies(response.data.Search);
    } else {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&type=${filter}&apikey=280d9187`
      );
      setMovies(response.data.Search);
    }
  };

  function formatDuration(minutes) {
    const minsInt = parseInt(minutes.trim(), 10);
    const hours = Math.floor(minsInt / 60);
    const mins = minsInt % 60;
    return `${hours}h ${mins}min`;
  }

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        movie,
        setMovie,
        searchQuery,
        setSearchQuery,
        type,
        setType,
        imdbID,
        setImdbID,
        options,
        setOptions,
        fetchMovies,
        formatDuration,
        fetchMovieDetails,
        filterMovies,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
