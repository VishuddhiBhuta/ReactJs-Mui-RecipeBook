import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

/**
 *
 * Parent
 *      App
 * Child
 *
 */

const RecipeBox = ({
  onInputChange,
  addRecipe,
  inputs,
  recipeTitle,
  ingredientsName,
}) => {
  return (
    <div>
      <Container
        sx={{
          paddingTop: "24px",
          paddingBottom: "24px",
          bgcolor: "#dbeeee",
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
            value={inputs.recipeTitle}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
            onChange={onInputChange}
          />
          <Input
            placeholder="Enter Ingredients name separated with commas"
            name="ingredients"
            value={inputs.ingredientsName}
            sx={{
              width: "100%",
            }}
            onChange={onInputChange}
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
              addRecipe();
            }}
          >
            Add Recipe
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default RecipeBox;
