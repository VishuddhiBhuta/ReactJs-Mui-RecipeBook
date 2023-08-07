import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useState } from "react";

/**
 *
 * Parent
 *      App
 * Child
 *
 */

const RecipeForm = ({ addRecipe }) => {
  //Create states for both input fields
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

  //Add Input Change Handlers
  const onRecipeTitleChange = (event) => {
    setRecipeTitle(event.target.value);
    //console.log(recipeTitle);
  };

  const onIngredientsChange = (event) => {
    setIngredients(event.target.value);
    //console.log(ingredients);
  };

  return (
    <div>
      <Container
        sx={{
          paddingTop: "24px",
          paddingBottom: "24px",
          backgroundColor: "#ffffff",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          level="h1"
          variant="h5"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Add Recipes
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Input
            placeholder="Enter Recipe Name"
            name="recipes"
            value={recipeTitle}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
            onChange={onRecipeTitleChange}
          />
          <Input
            placeholder="Enter Ingredients name separated with commas"
            name="ingredients"
            value={ingredients}
            sx={{
              width: "100%",
            }}
            onChange={onIngredientsChange}
          />
          <Button
            sx={{
              marginTop: "30px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            variant="contained"
            color="success"
            onClick={() => {
              setRecipeTitle("");
              setIngredients("");
              addRecipe(recipeTitle, ingredients);
            }}
          >
            Add Recipe
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default RecipeForm;
