import data from "$lib/data";

export function get() {
  let planets = [];

  data.forEach((planet) => {
    planets.push(planet.name);
  });
  //   console.log(planets);

  return {
    body: planets,
  };
}
