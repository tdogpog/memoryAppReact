function DisplayMain({ imgData, handleClick }) {
  return (
    <div className="displayContainer">
      {imgData.map((pokemon) => {
        //split the "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        //into array seperated by /
        const urlArray = pokemon.split("/");
        //get the last part (only unique component)
        const idsplitter = urlArray[urlArray.length - 1];
        //get the id only [2, png]
        const id = idsplitter.split(".")[0];

        return (
          <div
            className="pokemonItem"
            key={id}
            onClick={() => handleClick(pokemon)}
          >
            <img src={pokemon} alt={`Pokemon sprite`} />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayMain;
