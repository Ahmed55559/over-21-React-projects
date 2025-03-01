import "./SearchAutoComplete.css";

function Suggesstions({ filtered, handleSubmit, showDropDown }) {
  return (
    <ul className={showDropDown ? "search-autocomplete-suggestions" : ""}>
      {filtered && filtered.length > 0 && showDropDown
        ? filtered.map((user, index) => (
            <li
              key={index}
              className="search-autocomplete-item"
              onClick={handleSubmit}
            >
              {user}
            </li>
          ))
        : null}
    </ul>
  );
}
export default Suggesstions;
