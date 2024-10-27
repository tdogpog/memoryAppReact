function DisplayMain({ imgData }) {
  return (
    <div className="displayContainer">
      {imgData.map((pokemon, index) => (
        <div className="pokemonItem" key={index}>
          <img src={pokemon} alt="pokemon sprite" />
        </div>
      ))}
    </div>
  );
}

export default DisplayMain;
