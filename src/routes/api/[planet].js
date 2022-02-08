import data from "$lib/data";

export function get(request) {
  let planet = request.params.planet;
  planet = planet[0].toUpperCase() + planet.slice(1).toLowerCase();
  // console.log(planet);
  const result = data.find((item) => item.name === planet);
  // console.log(result);
  return {
    body: result,
  };
}
