//SearchBar.jsx
const SearchBar = ({ setSearchQuery }) => {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search blogs..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  };
  export default SearchBar;
  