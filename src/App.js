import React from 'react';
import { useEffect } from 'react';

const App = () => {

    // 2d2f8127

    const API_URL = "http://www.omdbapi.com?apikey=2d2f8127";

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies("The Matrix");
    });

    return (
        <div>
            <h1>App</h1>
        </div>
    );
};

export default App;