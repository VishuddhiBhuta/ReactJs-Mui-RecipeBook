import React, { useState } from "react";
import RecipeBox from "./components/Recipe/RecipeBox";
// import RecipeList from "./components/Recipe/RecipeList";
import Container from "@mui/material/Container";

/**
 *
 * Parent
 *      Index
 * Child
 *      RecipeBox
 *      RecipeList
 *
 */

function App() {
  // const state = {
  //   recipeTitle: "RecipeTitle",
  //   ingredientsName: "Ingredient Name1, Ingredient Name2",
  //   recipesList: [
  //     {
  //       recipeTitle: "RecipeTitle",
  //       ingredientsList: [
  //         {
  //           ingredientName: "Ingredient Name1",
  //         },
  //         {
  //           ingredientName: "Ingredient Name2",
  //         },
  //       ],
  //     },
  //   ],
  // };

  const [inputs, setInputs] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredientsName, setIngredientsName] = useState("");
  // const [recipesList, setRecipesList] = useState([]);

  const onInputChange = (event) => {
    //UseState updater function, It takes the pending state and calculates the next state from it.
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: [event.target.value],
    }));
  };

  const addRecipe = () => {
    //Check if Text is there in both input or not
    if (inputs.length === 0) return;

    //Push the Recipe title into the RecipeList

    //Split the values of Ingredient separated by commas
    setIngredientsName((prevState) => ({
      ...prevState,
      ingredientsName: ingredientsName.split(","),
    }));
    //let splittedValues = ingredientsName.split(",");
    console.log(ingredientsName);
  };

  return (
    <div className="App">
      <Container maxWidth="xs">
        <RecipeBox
          onInputChange={onInputChange}
          addRecipe={addRecipe}
          inputs="inputs"
          recipeTitle={recipeTitle}
          ingredientsName={ingredientsName}
        />
        {/* <RecipeList recipeTitle={recipeTitle} /> */}
      </Container>
    </div>
  );
}

export default App;
