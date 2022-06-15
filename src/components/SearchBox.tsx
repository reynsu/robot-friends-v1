import React, { ReactEventHandler, ChangeEventHandler } from "react";

type SearchBoxProps = {
  type: string;
  placeholder: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // searchChange: ChangeEventHandler;
};

const SearchBox = ({ type, placeholder, searchChange }: SearchBoxProps) => {
  return (
    <div className="tc pa2">
      <input
        type={type}
        placeholder={placeholder}
        className="tc pa3 b--green bg-lightest-blue"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
