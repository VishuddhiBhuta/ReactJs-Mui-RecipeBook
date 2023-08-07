import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

/**
 *
 * Parent
 *      App
 * Child
 *
 */

function RecipeList({ recipesList, keyIndex, removeRecipe, removeIngredient }) {
  return (
    <Card
      key={keyIndex}
      sx={{ marginTop: "30px", boxShadow: 3, borderRadius: 2 }}
    >
      <CardContent sx={{ position: "relative" }}>
        <IconButton
          onClick={() => {
            removeRecipe(keyIndex);
          }}
          edge="end"
          aria-label="delete"
          color="error"
          sx={{
            position: "absolute",
            right: "20px",
            top: "12px",
          }}
        >
          <DeleteIcon />
        </IconButton>
        <Typography level="h1" variant="h5" sx={{ marginBottom: "20px" }}>
          {recipesList.recipeTitle}
        </Typography>
        <List>
          {recipesList.ingredientsList.map((ingredients, index) => {
            if (ingredients.ingredientName.length > 0) {
              return (
                <ListItem
                  key={ingredients.index}
                  divider={true}
                  secondaryAction={
                    <div>
                      <IconButton edge="end" aria-label="edit" size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        size="small"
                        onClick={() => {
                          removeIngredient(keyIndex, index);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </div>
                  }
                >
                  <ListItemText primary={ingredients.ingredientName} />
                </ListItem>
              );
            }
          })}
        </List>
      </CardContent>
    </Card>
  );
}

export default RecipeList;
