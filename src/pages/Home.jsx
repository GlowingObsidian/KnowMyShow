import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmaze";

function Home() {
  const [searchStr, setSearchStr] = useState("Search Here");
  const [apiData, setApiData] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  console.log(searchOption);

  const onSearchInputChange = (event) => {
    setSearchStr(event.target.value);
  };

  const onSearch = async (event) => {
    event.preventDefault();
    if (searchOption === "shows") {
      const result = await searchForShows(searchStr);
      setApiData(result);
    } else {
      const result = await searchForPeople(searchStr);
      setApiData(result);
    }
  };

  const RenderApiData = () => {
    if (apiData) {
      return apiData[0].show
        ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  const onRadioChange = (event) => {
    setSearchOption(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>
        <RenderApiData />
      </div>
    </div>
  );
}

export default Home;
