function ShowCard({ name, image, id, summary, onStarMeClick, isStarred }) {
  const summaryStripped = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No description";

  return (
    <>
      <>
        <img src={image} alt={name} />
      </>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? "Unstar" : "Star"}
        </button>
      </>
    </>
  );
}

export default ShowCard;
