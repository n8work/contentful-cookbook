import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../../model/Recipe';
import RecipeComponent from '../RecipeComponent';
var contentful = require('contentful');

export default function RecipePage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  const client = contentful.createClient({
    space: process.env.REACT_APP_contentful_space,
    accessToken: process.env.REACT_APP_contentful_token
  });

  useEffect(() => {
    const query = { content_type: 'wbsRecipe', 'fields.slug': id };
    client.getEntries(query).then(function (untypedRecipes) {
      setRecipe(Recipe.fromUntyped(untypedRecipes.items[0]));
    });
  }, []);

  return (
    <article className="page recipe">
      <p>Recipe Page: {id}</p>
      <RecipeComponent recipe={recipe} />
    </article>
  );
}
