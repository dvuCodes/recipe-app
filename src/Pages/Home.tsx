import { useState, useContext } from "react";

import Search from "@/components/Search";
import EmptyList from "@/components/EmptyList";
import createId from "@/utils/createId";

// shad uis
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import { Badge } from "@/components/ui/badge";
import { Context } from "@/Context/RecipeProvider";

export interface RecipeProps {
  label: string;
  image: string;
  id: string;
  source: string;
  ingredientLines: string[];
  calories: number;
  url: string;
}

const Home = () => {
  const { handleOnClick, itemsList, setItemsList } = useContext(Context);

  const renderItems = () =>
    itemsList.map((item, index) => (
      <div className="relative" key={index}>
        <Badge variant="outline" className="justify-center p-4 w-full">
          {item}
          <div className="absolute right-0 p-4 cursor">x</div>
        </Badge>
      </div>
    ));

  console.log(itemsList);
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
      <SearchResults />
    </>
  );
};

export default Home;
