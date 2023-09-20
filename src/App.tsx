import Header from "./components/Header";
import Search from "./components/Search";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

import { useState } from "react";

function App() {
  const [itemsList, setItemsList] = useState<string[]>([]);

  console.log(itemsList);

  const renderItems = () =>
    itemsList.map((item) => (
      <div className="relative">
        <Badge variant="outline" className="justify-center p-4 w-full">
          {item}
          <div className="absolute right-0 p-4 cursor">x</div>
        </Badge>
      </div>
    ));

  return (
    <main className="flex bg-[#f7f7f7] justify-center min-h-screen ">
      <div className=" flex flex-col w-full md:max-w-2xl border-x ">
        <Header />
        <div className="flex flex-col justify-center items-center p-4">
          <Search setItemsList={setItemsList} />
        </div>
        <div className="border p-4 grid grid-cols-4 gap-x-2 place-center">
          {renderItems()}
        </div>
        <div className="flex justify-center p-4">
          <Button>Let's Cook</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
