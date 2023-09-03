import { useState } from "react";

function Home() {
  const [searchStr, setSearchStr] = useState("Search Here");

  const onSearchInputChanfe = (event) => {
    setSearchStr(event.target.value);
  };

  const onSearch = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
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
    </div>
  );
}

export default Home;
