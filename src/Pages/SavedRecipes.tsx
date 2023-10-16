import { useEffect, useState } from "react";
import { RecipeProps } from "./Home";

import { db } from "@/utils/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import RecipeCard from "@/components/RecipeCard";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  const [user] = useAuthState(auth);

  const savedRecipes = async () => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    try {
      const snapshot = await getDocs(
        collection(db, `users/${userRef.id}/savedRecipes`)
      );
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

  return (
    <section className="py-4 grid grid-cols-4 grid-rows-4 gap-4">
      {renderCards()}
    </section>
  );
};

export default SavedRecipes;
