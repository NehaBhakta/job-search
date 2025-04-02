import React from "react";
import SearchBox from "./JobSerch";
import PopularSearches from "./PopularSearches";

const BannerAction = () => {
  return (
    <>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <SearchBox />
      </div>
      <PopularSearches />
    </>
  );
};

export default BannerAction;
