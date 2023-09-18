function ShowMainData({ image, name, rating, summary, genres }) {
  return (
    <>
      <img src={image ? image.original : "/not_found.png"} alt={name} />
      <>
        <h1>{name}</h1>
        <>{rating.average || "N/A"}</>
        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        <>
          Genres:
          <>
            {genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </>
        </>
      </>
    </>
  );
}

export default ShowMainData;
