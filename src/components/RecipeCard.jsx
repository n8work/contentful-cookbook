import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link className="btn" to={`/recipe/${recipe.slug}`}>
        {recipe.title}
      </Link>
    </div>
  );
}
