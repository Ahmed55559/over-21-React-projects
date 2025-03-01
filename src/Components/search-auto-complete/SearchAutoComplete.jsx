import { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";
import "./SearchAutoComplete.css";

function SearchAutoComplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filtered, setFiltered] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFiltered(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  // Fetch users data
  async function fetchUsers() {
    setError(null); // Clear any previous error
    try {
      setLoading(true); // Start loading
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setError(null);
      }
    } catch (error) {
      setError(error); // Set error
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // End loading
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  function handleSubmit(e) {
    setSearchParam(e.target.innerText);
    setShowDropDown(false);
    setFiltered([]);
  }
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="search-autocomplete-container">
      <hr />
      <h1>search auto complete</h1>
      <input
        type="text"
        className="search-autocomplete-input"
        placeholder="Type username here..."
        onChange={handleChange}
        value={searchParam}
      />

      <Suggesstions
        filtered={filtered}
        handleSubmit={handleSubmit}
        showDropDown={showDropDown}
      />

      {error && (
        <p className="search-autocomplete-error">
          An error occurred: {error.message}
        </p>
      )}
      {loading && <h4 className="search-autocomplete-loading">Loading...</h4>}
    </div>
  );
}

export default SearchAutoComplete;
