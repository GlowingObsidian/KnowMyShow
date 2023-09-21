import { useStarredShows } from "../lib/useStarredShow";

function Starred() {
  const [starredShows] = useStarredShows();
  return <>Starred Page, starred: {starredShows.length}</>;
}

export default Starred;
