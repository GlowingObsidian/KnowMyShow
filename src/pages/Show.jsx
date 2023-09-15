import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";

const useShowById = (showId) => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getShowById(showId);
        setShowData(response);
      } catch (err) {
        setShowError(err);
      }
    }

    fetchData();
  }, [showId]);

  return { showData, showError };
};

function Show() {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <>Error: {showError.message}</>;
  }
  if (showData) {
    return <>Show data: {showData.name}</>;
  }
}

export default Show;
