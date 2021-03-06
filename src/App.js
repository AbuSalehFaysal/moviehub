import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import env from "react-dotenv";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const API_URL = `https://www.omdbapi.com?apikey=${env.API_KEY}`;

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found!</h2>
        </div>
      )}
      <div class="footer">
        <p>© Copyright 2020 <a className="link" href="https://abusalehfaysal.github.io/" target="_blank" rel="noreferrer">Abu Saleh Faysal</a></p>
      </div>
    </div>
  );
};

export default App;
