import Search from "@/components/Search";
import EmptyList from "@/components/EmptyList";

// shad uis
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import { Badge } from "@/components/ui/badge";
import { Context } from "@/Context/RecipeProvider";
import { useContext } from "react";
import { remove } from "firebase/database";

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

  const removeItem = (item: string) => {
    setItemsList((prevItems) => prevItems.filter((i) => i !== item));
  };

  const renderItems = () =>
    itemsList.map((item, index) => (
      <div className="relative rounded-full" key={index}>
        <Badge
          variant="secondary"
          className="justify-center p-4 w-full truncate">
          {item}
          <button
            className="absolute right-0 p-4 cursor rounded-full hover:text-xl transition-all duration-200"
            onClick={() => removeItem(item)}>
            x
          </button>
        </Badge>
      </div>
    ));

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <Search setItemsList={setItemsList} />
      </div>
      {itemsList.length > 0 ? (
        <div className="p-4 grid grid-cols-4 gap-4 place-center">
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
