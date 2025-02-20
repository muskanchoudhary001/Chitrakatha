import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Recommendations = ({ movieId }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // Function to fetch recommended movies
  const fetchRecommendedMovies = async () => {
    if (!movieId) return; // Don't fetch if there's no movie ID

    try {
      const response = await fetch(
        `${API_BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`,
        API_OPTIONS
      );
      if (!response.ok) throw new Error("Failed to fetch recommendations");

      const data = await response.json();
      if (data.results) {
        setRecommendedMovies(data.results.sort(() => 0.5 - Math.random()).slice(0, 5)); // Shuffle & pick 5
      }
    } catch (error) {
      console.error("Error fetching recommended movies:", error);
    }
  };

  // Fetch recommendations when movieId changes or every 5 minutes
  useEffect(() => {
    fetchRecommendedMovies(); // Initial Fetch

    const interval = setInterval(() => {
      fetchRecommendedMovies(); // Refresh every 2 minutes
    }, 120000); // 2 minutes = 120,000 ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [movieId]);

  return (
    <section className="recommendations">
      <h2>Recommendations</h2>
      {recommendedMovies.length > 0 ? (
        <ul>
          {recommendedMovies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available</p>
      )}
    </section>
  );
};

export default Recommendations;
