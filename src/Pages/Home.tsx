import { useState } from "react";

import Search from "@/components/Search";
import EmptyList from "@/components/EmptyList";
import createId from "@/utils/createId";

// shad uis
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import { Badge } from "@/components/ui/badge";
import { MenuBar } from "@/components/MenuBar";

export interface RecipeProps {
  label: string;
  image: string;
  id: string;
  source: string;
  ingredientLines: string[];
}

const Home = () => {
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<
    {
      label: string;
      image: string;
      id: string;
      source: string;
      ingredientLines: string[];
    }[]
  >([]);

  const renderItems = () =>
    itemsList.map((item, index) => (
      <div className="relative" key={index}>
        <Badge variant="outline" className="justify-center p-4 w-full">
          {item}
          <div className="absolute right-0 p-4 cursor">x</div>
        </Badge>
      </div>
    ));

  // https://api.edamam.com/api/recipes/v2?type=public&q=chicken%26bananas&app_id=2ab8f078&app_key=49e99396afb193fb2d35934b1df350cd

  const handleOnClick = () => {
    const ingredients = itemsList.join("%20");
    const fetchData = async () => {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${ingredients}&app_id=${
          import.meta.env.VITE_EDAMAM_ID
        }&app_key=${import.meta.env.VITE_EDAMAM_KEY}&random=true`
      );
      const data = await res.json();
      setRecipes([
        {
          label: data.hits[0].recipe.label,
          image: data.hits[0].recipe.image,
          id: createId(),
          source: data.hits[0].recipe.source,
          ingredientLines: data.hits[0].recipe.ingredientLines,
        },
      ]);
      console.log({ itemsList });
      console.log({ recipes });
    };
    fetchData();
  };
  //
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <Search setItemsList={setItemsList} />
      </div>
      {itemsList.length > 0 ? (
        <div className="border p-4 grid grid-cols-4 gap-x-2 place-center">
          {renderItems()}
        </div>
      ) : (
        <EmptyList />
      )}

      <div className="flex justify-center p-4">
        <Button onClick={handleOnClick}>Let's Cook</Button>
      </div>
      <SearchResults recipes={recipes} />
      <MenuBar />
    </>
  );
};

export default Home;
