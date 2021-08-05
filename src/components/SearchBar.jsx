import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export default function SearchBar() {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
    setSearchText("");
  };
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-8 px-5 text-center">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-search text-light"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
