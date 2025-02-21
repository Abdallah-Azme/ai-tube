import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchInput() {
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full ps-4 py-2 pe-12 rounded-s-full border focus:outline-none
          focus:border-blue-500 "
        />
      </div>

      {/* submit button */}
      <button className="px-5 py-2.5 bg-gray-100 border border-s-0 rounded-e-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
}
