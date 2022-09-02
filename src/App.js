import "./styles.css";
import React, { useState } from "react";
import { Search } from "./Search";
import { Items } from "./Items";
import { data } from "./Data";
import { DataContext } from "./Context";

export default function App() {
  const [matchingData, setMatchingData] = useState([]);
  return (
    <div className="App">
      <DataContext.Provider value={{ data, setMatchingData }}>
        <Search setMatchingData={setMatchingData} />
        {matchingData.map((productItem) => {
          return (
            <Items
              className="Items"
              title={productItem.name}
              price={productItem.price}
              description={productItem.description}
              key={productItem.id}
            ></Items>
          );
        })}
      </DataContext.Provider>
    </div>
  );
}
