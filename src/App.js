import React, { useEffect, useState } from 'react';
import RecipeComponent from './components/RecipeComponent';
import Recipe from './model/Recipe';
var contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_contentful_space,
  accessToken: process.env.REACT_APP_contentful_token
});

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  function fetchRecipes() {
    const query = { content_type: 'wbsRecipe' };

    client.getEntries(query).then(function (untypedRecipes) {
      // https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/entries/entry

      setRecipes(
        untypedRecipes.items.map((untypedRecipe) =>
          Recipe.fromUntyped(untypedRecipe)
        )
      );
    });
  }

  return (
    <div className="App">
      <header className="container">
        <h1>Worldwide Cookbook</h1>
        <p className="tagline">
          Meals from around the world, for every occasion
        </p>
      </header>

      <section className="container">
        <ul className="recipe-list">
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id} className="recipe-card">
                <RecipeComponent recipe={recipe} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
