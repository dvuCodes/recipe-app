import React from "react";
import { useState } from "react";
import createId from "@/utils/createId";

interface ContextType {
  recipes: {
    label: string;
    image: string;
    id: string;
    source: string;
    ingredientLines: string[];
    url: string;
    calories: number;
  }[];
  setRecipes: React.Dispatch<React.SetStateAction<typeof recipes>>;
  handleOnClick: () => void;
  setItemsList: React.Dispatch<React.SetStateAction<string[]>>;
  itemsList: string[];
}

const Context = React.createContext<ContextType | undefined>(undefined);

const RecipeProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<
    {
      label: string;
      image: string;
      id: string;
      source: string;
      ingredientLines: string[];
      url: string;
      calories: number;
    }[]
  >([]);

  const handleOnClick = () => {
    const ingredients = itemsList.join("%20");
    const fetchData = async () => {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${ingredients}&app_id=${
          import.meta.env.VITE_EDAMAM_ID
        }&app_key=${import.meta.env.VITE_EDAMAM_KEY}&random=true`
      );
      const data = await res.json();
      const recipes = data.hits.map(
        (recipe: {
          recipe: {
            label: string;
            image: string;
            source: string;
            ingredientLines: string[];
            url: string;
            calories: number;
          };
        }) => ({
          label: recipe.recipe.label,
          image: recipe.recipe.image,
          id: createId(),
          source: recipe.recipe.source,
          ingredientLines: recipe.recipe.ingredientLines,
          url: recipe.recipe.url,
          calories: recipe.recipe.calories,
        })
      );
      setRecipes([...recipes]);
    };
    fetchData();
  };

  return (
    <Context.Provider
      value={{ recipes, setRecipes, handleOnClick, setItemsList, itemsList }}>
      {children}
    </Context.Provider>
  );
};

export { Context, RecipeProvider };
