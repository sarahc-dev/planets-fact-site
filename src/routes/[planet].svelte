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
  import { fly } from "svelte/transition";
  import { elasticIn } from "svelte/easing";
  import { menuOpen } from "$lib/store.js";
  import Tablist from "$lib/Tablist.svelte";
  import PlanetImg from "$lib/PlanetImg.svelte";
  import PlanetInfo from "$lib/TabPanel.svelte";
  import PlanetStats from "$lib/PlanetStats.svelte";

  export let data;
  let currentTab;
  let outerWidth = 0;
  let wideScreen;

  $: if (outerWidth >= 765) {
    wideScreen = true;
  } else {
    wideScreen = false;
  }
</script>

<svelte:window bind:outerWidth />

{#key data.name}
  <main in:fly={{ x: -400, y: -40, duration: 450, easing: elasticIn }} class={$menuOpen ? "hide-body" : ""}>
    <Tablist planet={data.name} {wideScreen} bind:currentTab />
    <PlanetImg images={data.images} name={data.name} {currentTab} />
    <PlanetInfo name={data.name} overview={data.overview} structure={data.structure} geology={data.geology} {currentTab} />
    <PlanetStats rotation={data.rotation} revolution={data.revolution} radius={data.radius} temp={data.temperature} />
  </main>
{/key}

<style>
  @media (max-width: 767px) {
    .hide-body {
      display: none;
    }
  }

  @media (min-width: 768px) {
    main {
      display: grid;
      grid-template-columns: 1fr 40.84323%;
    }
  }

  @media (min-width: 900px) {
    main {
      margin: 0 2rem;
    }
  }

  @media (min-width: 1250px) {
    main {
      grid-template-columns: 64.2361% 1fr;
      grid-template-rows: min-content 1fr;
      max-width: 1650px;
      margin: 0 auto;
    }
  }
</style>
