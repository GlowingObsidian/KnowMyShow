import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import { useQuery } from "react-query";

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
    return <>Show data: {showData.name}</>;
  }
}

export default Show;
