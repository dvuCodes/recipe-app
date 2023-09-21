import { RecipeProps } from "@/Pages/Home";
import useHover from "@/Hooks/useHover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RecipeCardProps {
  recipes: RecipeProps[];
}

const RecipeCard = ({ recipes }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer flex flex-col">
      <CardHeader className="p-0">
        <img
          src={recipes.image}
          alt={recipes.label}
          className="ml-auto h-40 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-3">
        <div className="flex justify-between">
          <CardTitle className="text-m pb-2">{recipes.label}</CardTitle>
          <i className="fa-regular fa-star"></i>
        </div>
        <CardDescription className="text-xs pb-2">
          {recipes.ingredientLines.length} Ingredients
        </CardDescription>
        {/* <p className="text-xs">
          Card Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis at quos iure, alias dolorum nihil officia expedita rem!
          Facilis tenetur deserunt maiores voluptates quo nesciunt molestias
          officiis blanditiis ipsam dolore?
        </p> */}
      </CardContent>
      <CardFooter className="p-3 text-xs mt-auto">
        <p>{recipes.source}</p>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
