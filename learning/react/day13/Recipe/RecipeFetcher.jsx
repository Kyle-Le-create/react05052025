import { useEffect, useState } from "react";

export default function RecipeFetcher() {
  const [recipeId, setRecipeId] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        if (!res.ok) throw new Error("Recipe not found.");
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleNext = () => {
    setRecipeId((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setRecipeId((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div>
      <h1>No. {recipe.id}</h1>
      <h2>{recipe.name}</h2>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div>
        <button onClick={handlePrevious} disabled={recipeId === 1}>
          Previous Recipe
        </button>
        <button onClick={handleNext}>Next Recipe</button>
      </div>
    </div>
  );
}
