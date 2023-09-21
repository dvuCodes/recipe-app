import RecipeCard from "./RecipeCard";

import { RecipeProps } from "@/Pages/Home";

interface RecipeCardProps {
  recipes: RecipeProps[];
}

const SearchResults = ({ recipes }: RecipeCardProps) => {
  const renderCards = () =>
    recipes?.map((item, index) => <RecipeCard key={index} recipes={item} />);

  return (
    <section className="grid grid-cols-2 grid-row-2 md:grid-cols-4 gap-4 p-4 h-full">
      {renderCards()}
    </section>
  );
};

export default SearchResults;
