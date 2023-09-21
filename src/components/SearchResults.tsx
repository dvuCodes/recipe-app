import RecipeCard from "./RecipeCard";

import { RecipeProps } from "@/Pages/Home";

interface RecipeCardProps {
  recipes: RecipeProps[];
}

const SearchResults = ({ recipes }: RecipeCardProps) => {
  return (
    <section className="grid grid-cols-2 grid-row-2 md:grid-cols-4 md:grid-row-4 gap-4 p-4 h-full">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </section>
  );
};

export default SearchResults;
