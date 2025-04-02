import React from "react";
import PopularSearchesData from "./PopularSearchesData";
import PopularDataList from "./PopularDataList";

const PopularSearches = () => {
  return (
    <>
      <h3>Popular Searches</h3>
      <div className="grid-container">
        {PopularSearchesData.map((list) => (
          <PopularDataList key={list.id} ListData={list} />
        ))}
      </div>
    </>
  );
};
export default PopularSearches;
