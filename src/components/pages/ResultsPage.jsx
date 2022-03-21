import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Recipe from '../../model/Recipe';
import RecipeCard from '../RecipeCard';
var contentful = require('contentful');

export default function ResultsPage() {
  const search = useLocation().search;
  const q = new URLSearchParams(search).get('q');
  // const source = new URLSearchParams(search).get('source');

  const client = contentful.createClient({
    space: process.env.REACT_APP_contentful_space,
    accessToken: process.env.REACT_APP_contentful_token
  });

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
    <ul className="recipe-cards">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
  // return <article className="results">ResultsPage</article>;
}
