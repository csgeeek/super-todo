
const SearchBar = ({ onSearch }) => {
  // const onFocus = (e) => {
  //   console.log("hello");
  // }
  return(
    <input type="text" placeholder="Search Task" className="SearchTask" onKeyPress={() => onSearch()} />
  );
}

export default SearchBar;