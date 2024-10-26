export default async function APIData(setimgData) {
  const idArray = [2, 155, 340, 431, 34, 2, 41, 43, 22, 1, 4, 61, 5, 32, 9];

  try {
    const fetchPromises = idArray.map(async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokedata = await response.json();
      return pokedata.sprites.front_default;
    });
    const spriteData = await Promise.all(fetchPromises);
    setimgData(spriteData);
  } catch (error) {
    console.log("Error fetching Poke Data:", error);
  }
}
