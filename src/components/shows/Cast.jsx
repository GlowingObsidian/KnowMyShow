function Cast({ cast }) {
  return (
    <>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <>
            <img
              src={person.image ? person.image.medium : "/not_found.png"}
              alt=""
            />
            <>
              | {person.name} | {character.name} {voice && "| Voiceover"}
            </>
          </>
        </div>
      ))}
    </>
  );
}

export default Cast;
