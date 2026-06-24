import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img
        src={recipe.image}
        alt={recipe.title}
      />

      <h3>{recipe.title}</h3>

      <Link to={`/recipe/${recipe.id}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCard;