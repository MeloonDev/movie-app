const SearchBox = ({ setSearchValue }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        // value="star wars"
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Type to search"
      />
    </div>
  );
};
export default SearchBox;
