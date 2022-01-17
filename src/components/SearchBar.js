
const SearchBar = ({ onSearch }) => {
  const onChange = (e) => {
    let searchString = e.target.value;
    // console.log(searchString);
    onSearch(searchString);
  }
  return(
    <input type="text" placeholder="Search Task" className="SearchTask" onChange={onChange} />
  );
}

export default SearchBar;