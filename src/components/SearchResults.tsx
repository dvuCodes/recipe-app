import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import RecipeCard from "./RecipeCard";

const SearchResults = () => {
  return (
    <section className="grid grid-cols-2 grid-row-2 md:grid-cols-4 md:grid-row-4 gap-4 p-4 bg-red-100 h-full">
      <RecipeCard />
      {/* <RecipeCard />
      <RecipeCard />
      <RecipeCard /> */}
    </section>
  );
};

export default SearchResults;
