import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";

const TypeFilter = () => {
  const { filterMovies, type, setType, options } = useContext(DataContext);

  useEffect(() => {
    filterMovies(type);
  }, [type]);

  return (
    <div className="flex justify-end">
      <select
        id="type-filter"
        value={type}
        className="bg-stone-900 border  border-[#4caf50] rounded py-3 px-4 my-2 p-3 outline-none"
        onChange={(e) => setType(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
