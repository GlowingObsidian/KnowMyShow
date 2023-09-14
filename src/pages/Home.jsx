import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";

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
    if (apiData?.length === 0) {
      return <>No result found</>;
    }

    if (apiData) {
      if (apiData.length !== 0)
        return apiData[0].show ? (
          <ShowGrid shows={apiData} />
        ) : (
          <ActorGrid actors={apiData} />
        );
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
