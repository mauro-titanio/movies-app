import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App bg-dark text-white min-vh-100">
        <header className="py-4 text-center">
          <Link to="/">
            <h1>App-Movies</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/movie/:movieId">
              <MovieDetails />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
