import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Input from "@mui/material/Input";

/**
 *
 * Parent
 *      App
 * Child
 *
 * Note ==>
 * KeyIndex: ParentIndex (Individual Recipe Index)
 * Index: Ingredient Index
 *
 */

function RecipeList({ recipesList, keyIndex, removeRecipe, removeIngredient }) {
  const [isEditable, setEditable] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [editIngredientText, setEditIngredientText] = useState("");

  const editHandleChange = (event) => {
    setEditIngredientText(event.target.value);
    //console.log(ingredients);
  };

  const editIngredient = (parentIndex, editItemIndex) => {
    setEditable(!isEditable);
    console.log(recipesList.ingredientsList[editItemIndex].ingredientName);

    if (editIndex > -1) {
      setEditIngredientText(
        recipesList.ingredientsList[editItemIndex].ingredientName
      );
      //setEditIndex("-1");
    }
  };

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
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        size="small"
                        onClick={() => {
                          editIngredient(keyIndex, index);
                        }}
                      >
                        {isEditable ? (
                          <CheckIcon fontSize="small" />
                        ) : (
                          <EditIcon fontSize="small" />
                        )}
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
                  {isEditable ? (
                    <Input
                      name="editedIngredient"
                      value={editIngredientText}
                      sx={{
                        width: "100%",
                      }}
                      onChange={editHandleChange}
                    />
                  ) : (
                    <ListItemText primary={ingredients.ingredientName} />
                  )}
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
