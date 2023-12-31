import { useStarredShows } from "../../lib/useStarredShow";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../../common/FlexGrid";
import NotFoundImg from "../../lib/not_found.png";

function ShowGrid({ shows }) {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = (showId) => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : NotFoundImg}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
}

export default ShowGrid;
