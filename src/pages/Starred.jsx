import { useQuery } from "react-query";
import { useStarredShows } from "../lib/useStarredShow";
import { getShowByIds } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";

function Starred() {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShowsError) {
    return <>{starredShowsError}</>;
  }
  if (starredShows && starredShows.length > 0) {
    return <ShowGrid shows={starredShows} />;
  } else {
    return <>No shows starred</>;
  }
}

export default Starred;
