import Header from "./components/Header";
import Search from "./components/Search";

import { useState } from "react";

function App() {
  const [itemsList, setItemsList] = useState<string[]>([]);

  console.log(itemsList);

  return (
    <main className="flex bg-red-300 justify-center min-h-screen ">
      <div className=" flex flex-col w-full md:max-w-2xl border-x ">
        <Header />
        <div className="flex flex-col justify-center items-center p-4">
          <Search setItemsList={setItemsList} />
        </div>
      </div>
    </main>
  );
}

export default App;
