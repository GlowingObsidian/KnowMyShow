import { useState } from "react";
import { searchForShows } from "../api/tvmaze";

function Home() {
  const [searchStr, setSearchStr] = useState("Search Here");
  const [apiData, setApiData] = useState(null);

  const onSearchInputChanfe = (event) => {
    setSearchStr(event.target.value);
  };

  const onSearch = async (event) => {
    event.preventDefault();
    const result = await searchForShows(searchStr);
    setApiData(result);
  };

  const RenderApiData = () => {
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchInputChanfe}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>
        <RenderApiData />
      </div>
    </div>
  );
}

export default Home;
