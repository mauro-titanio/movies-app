import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { httpGet } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";



export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = useQuery();
  const search = query.get("search");
  console.log(search)
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/movie/now_playing";
    httpGet(searchUrl).then((data) => {
      setMovies(data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </ul>
  );
}
