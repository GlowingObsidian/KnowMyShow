import { useParams } from "react-router-dom";
import { searchForShowsById } from "../api/tvmaze";

function Show() {
  const { showId } = useParams();
  return <>Hello {showId}</>;
}

export default Show;
