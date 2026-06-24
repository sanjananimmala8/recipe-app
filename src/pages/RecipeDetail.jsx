import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        width="300"
      />

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>

      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;