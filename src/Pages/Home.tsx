import { useState } from "react";

import Search from "@/components/Search";

// shad uis
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import { Badge } from "@/components/ui/badge";
import { MenuBar } from "@/components/MenuBar";

const Home = () => {
  const [itemsList, setItemsList] = useState<string[]>([]);

  const renderItems = () =>
    itemsList.map((item) => (
      <div className="relative">
        <Badge variant="outline" className="justify-center p-4 w-full">
          {item}
          <div className="absolute right-0 p-4 cursor">x</div>
        </Badge>
      </div>
    ));

  console.log(itemsList);

  // https://api.edamam.com/api/recipes/v2?type=public&q=chicken%26bananas&app_id=2ab8f078&app_key=49e99396afb193fb2d35934b1df350cd

  //
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <Search setItemsList={setItemsList} />
      </div>
      <div className="border p-4 grid grid-cols-4 gap-x-2 place-center">
        {renderItems()}
      </div>
      <div className="flex justify-center p-4">
        <Button>Let's Cook</Button>
      </div>
      <SearchResults />
      <MenuBar />
    </>
  );
};

export default Home;
