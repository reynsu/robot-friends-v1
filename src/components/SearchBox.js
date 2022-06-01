const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc pa2">
      <input
        type="search"
        placeholder="search robots"
        className="tc pa3 b--green bg-lightest-blue"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
