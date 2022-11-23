import React from "react";

const SearchCharacter = ({ handleSearch, submitSearch }) => {
  return (
    <form
      onSubmit={submitSearch}
      onChange={handleSearch}
      className="max-w-md px-4 mx-auto mt-12 flex flex-row justify-evenly"
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50/25 focus:bg-white focus:border-indigo-600"
        />
      </div>
      <button className="px-4 py-2 text-sm text-white duration-150 bg-blue-600 rounded-md hover:bg-blue-700 active:shadow-lg">
        Search
      </button>
    </form>
  );
};

export default SearchCharacter;
