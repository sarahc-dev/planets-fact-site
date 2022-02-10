<script context="module">
  export async function load({ fetch, params }) {
    const res = await fetch(`/api/${params.planet}`);
    const data = await res.json();

    return {
      props: { data },
    };
  }
</script>

<script>
  import Tablist from "$lib/Tablist.svelte";
  import PlanetImg from "$lib/PlanetImg.svelte";
  import PlanetInfo from "$lib/TabPanel.svelte";
  import PlanetStats from "$lib/PlanetStats.svelte";

  export let data;
  let current;
  let outerWidth = 0;
  let wideScreen;

  $: if (outerWidth >= 765) {
    wideScreen = true;
  } else {
    wideScreen = false;
  }
</script>

<svelte:window bind:outerWidth />

<main>
  <Tablist planet={data.name} {wideScreen} bind:current />
  <PlanetImg images={data.images} name={data.name} {current} />
  <PlanetInfo name={data.name} overview={data.overview} structure={data.structure} geology={data.geology} {current} />
  <PlanetStats rotation={data.rotation} revolution={data.revolution} radius={data.radius} temp={data.temperature} />
</main>

<style>
  @media (min-width: 768px) {
    main {
      display: grid;
      grid-template-columns: 1fr 22.5625rem;
    }
  }

  @media (min-width: 1250px) {
    main {
      grid-template-columns: 925px 1fr;
    }
  }
</style>
