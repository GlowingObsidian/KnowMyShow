import { searchForShows, searchForPeople } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";
import { useQuery } from "react-query";
import { useState } from "react";

function Home() {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
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
