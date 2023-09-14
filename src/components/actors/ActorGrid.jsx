import ActorCard from "./ActorCard";

function ActorGrid({ actors }) {
  return (
    <>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image ? data.person.image.medium : "/not_found.png"
          }
        />
      ))}
    </>
  );
}

export default ActorGrid;
