
const SearchBar = ({ onSearch }) => {
  const onChange = (e) => {
    let searchString = e.target.value;
    onSearch(searchString);
  }
  return(
    <div className="SearchBar">
      <label >Search</label>
      <input type="text" placeholder="Search Task" className="search-field" onChange={onChange} />
    </div>
  );
}

export default SearchBar;