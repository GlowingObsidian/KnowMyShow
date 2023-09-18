import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import { useQuery } from "react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";

function Show() {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <>Error: {showError.message}</>;
  }
  if (showData) {
    return (
      <>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </>
        <>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </>
        <>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </>
      </>
    );
  }
}

export default Show;
