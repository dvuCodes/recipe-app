import { RecipeProps } from "@/Pages/Home";
import { useState } from "react";
import { Link } from "react-router-dom";

// firebase imports
import { db } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";

// shad imports
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RecipeCardProps {
  recipes: RecipeProps;
}

const RecipeCard = ({ recipes }: RecipeCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const addToCollection = async () => {
    try {
      const itemRef = await addDoc(collection(db, "recipes"), {
        ...recipes,
      });
      console.log("item added", itemRef.id);
    } catch (e) {
      console.log("error adding item", e);
    }
  };

  return (
    <Card className="overflow-hidden  flex flex-col">
      <CardHeader className="p-0">
        <img
          src={recipes.image}
          alt={recipes.label}
          className="ml-auto h-40 w-full object-cover cursor-pointer"
        />
      </CardHeader>
      <CardContent className="p-3">
        <div className="flex justify-between gap-2">
          <Link to={`/recipes/${recipes.id}`}>
            <CardTitle
              className={`text-m pb-2 cursor-pointer ${
                isHovering ? "text-red-400" : ""
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
              {recipes.label}
            </CardTitle>
          </Link>

          <button
            className="fa-regular fa-star hover:scale-110 transition-all duration-200"
            onClick={() => addToCollection()}></button>
        </div>
        <CardDescription className="text-xs pb-2">
          {recipes.ingredientLines.length} Ingredients
        </CardDescription>
        <p>{recipes.calories}</p>
      </CardContent>
      <CardFooter className="p-3 text-xs mt-auto">
        <a href={recipes.url} target="_blank">
          <p>{recipes.source}</p>
        </a>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
