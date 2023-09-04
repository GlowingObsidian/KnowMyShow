import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";

function Home() {
  const [apiData, setApiData] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    let result;

    if (searchOption === "shows") {
      result = await searchForShows(q);
      setApiData(result);
    } else {
      result = await searchForPeople(q);
      setApiData(result);
    }
  };

  const RenderApiData = () => {
    try {
      if (apiData) {
        return apiData[0].show
          ? apiData.map((data) => (
              <div key={data.show.id}>{data.show.name}</div>
            ))
          : apiData.map((data) => (
              <div key={data.person.id}>{data.person.name}</div>
            ));
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>
        <RenderApiData />
      </div>
    </div>
  );
}

export default Home;
