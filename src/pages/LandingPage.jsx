import { MoviesGrid } from "../components/MoviesGrid";
import SearchBar from "../components/SearchBar";

export function LandingPage() {
  return (
    <div>
      <SearchBar/>
      <MoviesGrid/>
    </div>
  );
}
