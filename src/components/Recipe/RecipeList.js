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
  const [editIndex, setEditIndex] = useState(-1);
  const [editIngredientText, setEditIngredientText] = useState("");

  const editHandleChange = (event) => {
    setEditIngredientText(event.target.value);
    console.log(event.target.value);
  };

  const editIngredient = (parentIndex, editItemIndex) => {
    setEditIndex(editItemIndex);

    if (editItemIndex > -1) {
      setEditIngredientText(
        recipesList.ingredientsList[editItemIndex].ingredientName
      );
    }
  };

  const saveIngredient = (parentIndex, editIngIndex) => {
    console.log(editIngIndex);
    setEditIndex(-1);

    recipesList.ingredientsList[editIngIndex].ingredientName =
      editIngredientText;

    let newRecipesList = {
      ...recipesList,
      ingredientsList: recipesList.ingredientsList,
    };

    console.log(newRecipesList);
  };

  // console.log("OUTSIDE edit index===>", editIndex);

  return (
    <Card sx={{ marginTop: "30px", boxShadow: 3, borderRadius: 2 }}>
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
            const isEditable = editIndex === index;
            if (ingredients.ingredientName.length === 0) return null;

            if (isEditable) {
              // bhaila edit hoy to aa render thase
              // with input
              return (
                <ListItem
                  key={`${recipesList.recipeTitle}${index}`}
                  divider={true}
                  secondaryAction={
                    <>
                      <IconButton
                        edge="end"
                        aria-label="Save"
                        size="small"
                        onClick={() => {
                          saveIngredient(keyIndex, index);
                        }}
                      >
                        <CheckIcon fontSize="small" />
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
                    </>
                  }
                >
                  <Input
                    name="editedIngredient"
                    value={editIngredientText}
                    sx={{
                      width: "100%",
                    }}
                    onChange={editHandleChange}
                  />
                </ListItem>
              );
            } else {
              // ane jo edit button par click na karyu
              // to aa render thase

              return (
                <ListItem
                  key={`${recipesList.recipeTitle}${index}`}
                  divider={true}
                  secondaryAction={
                    <>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        size="small"
                        onClick={() => {
                          editIngredient(keyIndex, index);
                        }}
                      >
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
                    </>
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
