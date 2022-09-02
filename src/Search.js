import React, { useEffect, useState, useContext } from "react";
import { debounce } from "./utils";
import { DataContext } from "./Context";
import TextField from "@material-ui/core/TextField";

export function Search() {
  const [searchItem, setSearchItem] = useState("");
  const { data, setMatchingData } = useContext(DataContext);
  useEffect(() => {
    const tmp = data.filter((item) => {
      if (searchItem === "") return false;
      return item.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    setMatchingData(tmp);
  }, [data, setMatchingData, searchItem]);
  return (
    <TextField
      helperText="Please enter your search item"
      id="demo-helper-text-misaligned"
      label="Search Item"
      type="text"
      onChange={(e) => {
        debounce(setSearchItem, 1000)(e.target.value);
      }}
    ></TextField>
  );
}
