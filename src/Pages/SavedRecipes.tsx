import { useEffect, useState } from "react";
import { RecipeProps } from "./Home";

import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

import RecipeCard from "@/components/RecipeCard";

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  const savedRecipes = async () => {
    try {
      const snapshot = await getDocs(collection(db, "recipes"));
      const fetchedRecipes = snapshot.docs.map(
        (doc) => doc.data() as RecipeProps
      );
      setRecipes(fetchedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    savedRecipes();
  }, []);

  const renderCards = () =>
    recipes?.map((item, index) => <RecipeCard key={index} recipes={item} />);

  return <div>{renderCards()}</div>;
};

export default SavedRecipes;
