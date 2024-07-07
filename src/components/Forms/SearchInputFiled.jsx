import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "next/navigation";

function SearchInputFiled({ setSelectedItems, placeholder = "Search..." }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("search"));

  const handleSearchPrams = (value) => {
    // Check if any other parameters exist in searchQuery
    const existingParams = Object.fromEntries(searchParams.entries());

    if (!value) {
      // If value is empty, remove the search parameter from existingParams
      delete existingParams.search;
    } else {
      // If value is not empty, update the search parameter in existingParams
      existingParams.search = value;
      existingParams.page = 1;
    }

    // Update the search parameters with the modified existingParams
    setSearchParams(existingParams);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchPrams(searchText);
  };

  const handleOnChange = (event) => {
    setSearchText(event.target.value);
    if (event.target.value === "") {
      handleSearchPrams(event.target.value);
    }
    setSelectedItems && setSelectedItems([]);
  };

  return (
    <form>
      <div className="relative">
        <button
          type="submit"
          onClick={handleSubmit}
          className="absolute inset-y-0 right-0 flex items-center rounded-r px-4 bg-brand-blue-500 hover:bg-brand-blue-400 text-white focus:outline-none"
        >
          <FiSearch />
        </button>

        <input
          type="text"
          value={searchText}
          onChange={handleOnChange}
          placeholder={placeholder}
          className="w-full h-[45px] bg-white border border-[#b9babc5d] outline-none font-medium font-poppins text-brand-blue-400 py-3 pl-4 pr-16 rounded"
        />
      </div>
    </form>
  );
}

export default SearchInputFiled;
