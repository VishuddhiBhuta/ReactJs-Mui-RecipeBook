import React, { useState } from "react";
import RecipeForm from "./components/Recipe/RecipeForm";
import RecipeList from "./components/Recipe/RecipeList";
import Container from "@mui/material/Container";

/**
 *
 * Parent
 *      Index
 * Child
 *      RecipeForm
 *      RecipeList
 *
 */

/**
 *
 * Expected Data Pattern
 *    [
 *      {
 *        recipeTitle: "",
 *        ingredientsList: [
 *          {
 *            ingredientName: "",
 *          }
 *        ]
 *      }
 *    ]
 *
 */

function App() {
  const [recipesList, setRecipesList] = useState([
    {
      recipeTitle: "Title",
      ingredientsList: [
        {
          ingredientName: "Ingredient 1",
        },
        {
          ingredientName: "Ingredient 2",
        },
        {
          ingredientName: "Ingredient 3",
        },
      ],
    },
    {
      recipeTitle: "Title 2",
      ingredientsList: [
        {
          ingredientName: "Ingredient 1",
        },
        {
          ingredientName: "Ingredient 2",
        },
        {
          ingredientName: "Ingredient 3",
        },
      ],
    },
  ]);

  //Add the recipes details in the List
  const addRecipe = (title, ingredients) => {
    //title and ingredients should not be empty
    if (title.length === 0 || ingredients.length === 0) return;

    //Parameters that will show the recipetitle and ingredients
    console.log(title, ingredients);

    //Split the ingredients separated by commas
    let splittedIngredients = ingredients.split(",");
    let newIngredients = [];
    //console.log(splittedIngredients);

    splittedIngredients.forEach((value) => {
      newIngredients.push({
        ingredientName: value,
      });
    });

    //Update the list
    setRecipesList((oldRecipe) => [
      ...oldRecipe,
      {
        recipeTitle: title,
        ingredientsList: [...newIngredients],
      },
    ]);
  };

  //Remove the recipe from the list
  const removeRecipe = (removeIndex) => {
    let filteredRecipe = recipesList.filter(
      (list, index) => index !== removeIndex
    );
    console.log("removeIndex", removeIndex);
    console.log("filteredRecipe", filteredRecipe);
    setRecipesList(filteredRecipe);
  };

  //Remove Ingredients from the list
  const removeIngredient = (parentIndex, removeIndex) => {
    let ingredients = recipesList[parentIndex].ingredientsList;
    console.log(ingredients);

    //Get the filtered ingredients list
    let filteredList = ingredients.filter(
      (list, index) => index !== removeIndex
    );

    console.log(filteredList);

    //Update the entire Recipe

    let newRecipeList = [...recipesList];
    newRecipeList[parentIndex].ingredientsList = filteredList;

    setRecipesList(newRecipeList);
  };

  return (
    <div className="App">
      <Container maxWidth="xs">
        <RecipeForm addRecipe={addRecipe} />
        {recipesList.map((recipe, index) => {
          return (
            <RecipeList
              keyIndex={index}
              recipesList={recipe}
              removeRecipe={removeRecipe}
              removeIngredient={removeIngredient}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
