import { useEffect } from "react";

import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

import RecipeCard from "@/components/RecipeCard";

const SavedRecipes = () => {
  const savedRecipes = async () => {
    try {
      const snapshot = await getDocs(collection(db, "recipes"));
      console.log(snapshot.docs.map((doc) => doc.data()));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    savedRecipes();
  }, []);

  return (
    <div>
      <h1>saved recipes pages</h1>
    </div>
  );
};

export default SavedRecipes;
