import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../utils/httpClient";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    httpGet("/movie/" + movieId).then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <div className="card border-0 rounded rounded-3 overflow-hidden">
            <img width="100%" height="auto" src={imageUrl} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <p>
            <strong>Title: </strong>
            {movie.title}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="text-justify">
            <strong>Description: </strong>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
