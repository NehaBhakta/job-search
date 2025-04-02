import React from "react";

const PopularDataList = (props) => {
  const { ListData } = props;
  const { Titel } = ListData;
  return (
    <>
      <div class="grid-item">{Titel}</div>
    </>
  );
};

export default PopularDataList;
