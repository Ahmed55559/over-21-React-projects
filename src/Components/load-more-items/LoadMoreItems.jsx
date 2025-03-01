import React, { use, useEffect, useState } from "react";
import "./LoadMoreItems.css";

function LoadMoreItems() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchRecipes() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=10&skip=${count === 0 ? 0 : count}`
      );
      const data = await response.json();
      const newRecipes = data.recipes;

      if (newRecipes && newRecipes.length) {
        setRecipes((prevData) => [...prevData, ...newRecipes]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [count]);

  useEffect(() => {
    recipes && recipes.length === 50 ? setDisabled(true) : setDisabled(false);
  }, [recipes]);
  const loadMore = () => {
    setCount((prevCount) => prevCount + 10);
  };
  return (
    <div className="container">
      <div className="recipes">
        {recipes && recipes.length
          ? recipes.map((recipe, index) => (
              <div className="recipe" key={index}>
                <div className="img">
                  <img src={recipe.image} alt={recipe.name} />
                </div>
                <div className="text">
                  <h3>{recipe.name}</h3>
                  <p>difficulty: {recipe.difficulty}</p>
                  <p>time to cook: {recipe.cookTimeMinutes}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      {loading && <div className="loading">Loading more...</div>}
      <div>
        <button onClick={loadMore} disabled={disabled || loading}>
          Load more
        </button>
      </div>
    </div>
  );
}

export default LoadMoreItems;
