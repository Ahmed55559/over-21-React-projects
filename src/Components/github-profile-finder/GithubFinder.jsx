import { useState } from "react";
import "./GithubFinder.css";
function GithubFinder() {
  const [profileName, setProfileName] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    if (!profileName.trim()) {
      setError("Please enter a valid GitHub username.");
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await fetch(
        `https://api.github.com/users/${profileName}`
      );
      if (!response.ok) {
        throw new Error("User not found!");
      }
      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      setError(err.message);
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="profile-content">
      <hr />
      <h1>Githup profile finder</h1>
      <div className="finder">
        <input
          type="text"
          id="profile-name"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          name="search-by-username"
          placeholder="Type the GitHub username"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {profileData && (
        <div className="data">
          <img src={profileData.avatar_url} alt="avatar" />
          <h2>{profileData.name || "No Name Provided"}</h2>
          <p>{profileData.bio || "No Bio Available"}</p>
          <p>Followers: {profileData.followers}</p>
          <p>Following: {profileData.following}</p>
          <p>Public Repos: {profileData.public_repos}</p>
          <a
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GithubFinder;
