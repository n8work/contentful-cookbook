import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../../model/Recipe';
import RecipeComponent from '../RecipeComponent';
var contentful = require('contentful');

export default function RecipePage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();
  const [broken, setBroken] = useState(false);

  const client = contentful.createClient({
    space: process.env.REACT_APP_contentful_space,
    accessToken: process.env.REACT_APP_contentful_token
  });

  useEffect(() => {
    const query = { content_type: 'wbsRecipe', 'fields.slug': id };
    client.getEntries(query).then(function (untypedRecipes) {
      console.log(untypedRecipes);
      try {
        setRecipe(Recipe.fromUntyped(untypedRecipes.items[0]));
      } catch (error) {
        // Error! Probably doesn't exist
        console.log('Error');
        setBroken(true);
      }
    });
  }, []);

  return (
    <article className="page">
      {recipe && <RecipeComponent recipe={recipe} />}

      {broken && (
        <div className="recipe-error">
          <h2>Recipe not found!</h2>
          <p>
            We couldn't find that recipe. It either was moved somewhere else, or
            never existed at all.
          </p>
        </div>
      )}
    </article>
  );
}
