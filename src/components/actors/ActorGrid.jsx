import ActorCard from "./ActorCard";
import { FlexGrid } from "../../common/FlexGrid";
import NotFoundImg from "../../lib/not_found.png";

function ActorGrid({ actors }) {
  return (
    <FlexGrid>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={data.person.image ? data.person.image.medium : NotFoundImg}
        />
      ))}
    </FlexGrid>
  );
}

export default ActorGrid;