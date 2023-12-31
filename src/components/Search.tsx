import React, {
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useContext,
} from "react";

import { Context } from "@/Context/RecipeProvider";

interface SearchProps {
  setItemsList: Dispatch<SetStateAction<string[]>>;
}

const Search: React.FC<SearchProps> = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { setItemsList } = useContext(Context);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setItemsList((prevItems) => [...prevItems, searchItem]);
    inputRef.current?.focus();
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <form className="w-full flex justify-cente" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-tl-full rounded-bl-full p-4 w-[80%] "
        placeholder="Type something.."
        onChange={(e) => setSearchItem(e.target.value)}
        ref={inputRef}
      />
      <button className="rounded-tr-full rounded-br-full bg-slate-400 w-20 cursor-pointer ">
        Submit
      </button>
    </form>
  );
};

export default Search;
