import React, {
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";

interface SearchProps {
  setItemsList: Dispatch<SetStateAction<string[]>>;
}

const Search: React.FC<SearchProps> = ({ setItemsList }) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setItemsList((prevItems) => [...prevItems, searchItem]);
    inputRef.current?.focus();
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-full p-4 w-[80%] "
        placeholder="Type something.."
        onChange={(e) => setSearchItem(e.target.value)}
        ref={inputRef}
      />
    </form>
  );
};

export default Search;
