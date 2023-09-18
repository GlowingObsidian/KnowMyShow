function Seasons({ seasons }) {
  return (
    <>
      <p>Seasons in total: {seasons.length}</p>
      <p>
        Episodes in total:{" "}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>
      <>
        {seasons.map((season) => (
          <div key={season.id}>
            <p>Season: {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>
            <>
              Aired: {season.premiereDate} - {season.endDate}
            </>
          </div>
        ))}
      </>
    </>
  );
}

export default Seasons;
