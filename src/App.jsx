import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Search from "./components/Search";
import Spinner from "./components/spinner";
import Moviecard from "./components/Moviecard";
import { getTrendingMovies, updateSearchCount } from "./appwrite.js";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Use react-use debounce to update debouncedSearchTerm after delay
  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 500, [searchTerm]);

  // Fetch movies from API
  const fetchMovies = async (query = "") => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      console.log(`Fetching movies for: ${query}`); // Debugging API calls

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch movies");

      const data = await response.json();
      if (!data.results) {
        setErrorMessage("No movies found");
        setMovieList([]);
      } else {
        setMovieList(data.results);

        // Update search count in Appwrite database
        if(query && data.results.length >0){
          await updateSearchCount(query, data.results[0]);
        }
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  // Fetch trending movies from Appwrite database
  const loadTrendingMovies = async () => { 
         try{
                const movies = await getTrendingMovies();

                setTrendingMovies(movies)
         }catch(error){
           console.error(`Error fetching trending movies: ${error}`);
    }
  }
  // Fetch movies when debounced search term changes
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  },[])


  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hustle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>


        { trendingMovies.length >0 && (
            <section className="trending">
                <h2>Trending Movies</h2>

                <ul>
                   {trendingMovies.map((movie,index) =>(
                       <li key={movie.$id}>
                         <p>{index +1}</p>
                         <img src={movie.poster_url} alt={movie.title} />
                       </li>
                   ))}
                </ul>
            </section>
        )}

        <section className="all-movies">
          <h2 >All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <Moviecard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;