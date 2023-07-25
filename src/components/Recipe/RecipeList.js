import React from "react";

function RecipeList({ recipeTitle, recipesList, ingredientsName }) {
  return (
    <div>
      {recipeTitle}
      {ingredientsName}
    </div>
  );
}

export default RecipeList;
