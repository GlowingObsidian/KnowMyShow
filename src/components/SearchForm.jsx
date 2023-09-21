import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";

function SearchForm({ onSearch }) {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState("shows");

  const onSearchInputChange = (event) => {
    setSearchStr(event.target.value);
  };

  const onRadioChange = (event) => {
    setSearchOption(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchInputChange}
        ></input>
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          ></input>
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={onRadioChange}
          ></input>
        </label>

        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
