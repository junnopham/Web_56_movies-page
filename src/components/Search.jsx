import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div className="relative mx-auto text-white mb-5">
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-700 bg-gray-800 w-full h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
          type="search"
          name="search"
          value={search}
          onChange={handleChangeSearch}
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-5">
          <FaSearch className="text-white h-4 w-4 fill-current" />
        </button>
      </form>
    </div>
  );
};

export default Search;
