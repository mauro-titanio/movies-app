import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <Link to={"/movie/" + movie.id}>
      <div className="card text-center pb-0 rounded rounded-3 border-0 bg-dark h-auto">
        <img src={imageUrl} alt={movie.title} className="rounded-top" />
        <div className="container">
          <small>{movie.title}</small>
        </div>
      </div>
    </Link>
  );
}
