
const SearchBar = ({ onSearch }) => {

  return(
    <input type="text" placeholder="Search Task" className="SearchTask" onFocus={() => onSearch()} />
  );
}

export default SearchBar;