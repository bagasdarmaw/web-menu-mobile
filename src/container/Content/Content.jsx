import React, { useState } from "react";

import { Menus, Dropmenu } from "../../components";
import { data } from "../../data/data";

const Content = () => {
  const [allData, setData] = useState(data);

  const generateCategoryDataForDropdown = () => {
    return [...new Set(data.map((item) => item.category))];
  };

  const handleFilterCategory = (category) => {
    const filteredData = data.filter((item) => {
      if (item.category === category) {
        return item;
      } else if (category === "all") {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <>
      <div className="container">
        <div className="app__menu row">
          <Dropmenu
            categorys={generateCategoryDataForDropdown()}
            onCategoryFilter={handleFilterCategory}
          />

          {allData.map((item) => (
            <Menus item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
