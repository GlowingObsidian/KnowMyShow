import ShowCard from "./ShowCard";

function ShowGrid({ shows }) {
  return (
    <>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : "/not_found.png"}
          summary={data.show.summary}
        />
      ))}
    </>
  );
}

export default ShowGrid;
