<script>
  import { slide } from "svelte/transition";
  export let images;
  export let name;
  export let currentTab;
</script>

<div>
  {#key name}
    {#if currentTab === 2}
      <img in:slide class={name.toLowerCase()} height="256" width="256" src={images.internal} alt={`${name} - internal`} />
    {:else if currentTab === 3}
      <img in:slide class={name.toLowerCase()} height="256" width="256" src={images.planet} alt={name} />
      <img class="geology" src={images.geology} alt={`${name} - geology`} />
    {:else}
      <img in:slide class={name.toLowerCase()} height="256" width="256" src={images.planet} alt={name} />
    {/if}
  {/key}
</div>

<style>
  div {
    height: 68.267vw;
    width: 68.267vw;
    max-height: 22rem;
    max-width: 22rem;
    margin: 1.5rem auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .geology {
    width: 62.65px;
    position: absolute;
    bottom: 5vw;
  }

  .mercury {
    width: 43.3594%;
    height: 43.3594%;
  }

  .venus {
    width: 60.15625%;
    height: 60.15625%;
  }

  .earth,
  .neptune {
    width: 67.578125%;
    height: 67.578125%;
  }

  .mars {
    width: 50.390625%;
    height: 50.390625%;
  }

  .jupiter {
    width: 87.5%;
    height: 87.5%;
  }

  .saturn {
    width: 100%;
    height: 100%;
  }

  .uranus {
    width: 68.75%;
    height: 68.75%;
  }

  @media (min-width: 768px) {
    div {
      max-height: 422px;
      max-width: 422px;
      margin: 1.6875rem auto 0.6875rem;
      grid-column: 1 / 3;
      grid-row-start: 1;
    }

    .geology {
      width: 103.25px;
      bottom: 2vw;
    }

    .mercury {
      width: 43.6019%;
      height: 43.6019%;
    }

    .venus {
      width: 59.952607%;
      height: 59.952607%;
    }

    .earth,
    .neptune {
      width: 67.535545%;
      height: 67.535545%;
    }

    .mars {
      width: 50.473934%;
      height: 50.473934%;
    }

    .jupiter {
      width: 87.440758%;
      height: 87.440758%;
    }

    .uranus {
      width: 68.720379%;
      height: 68.720379%;
    }
  }

  @media (min-width: 1250px) {
    div {
      height: 46.25626vw;
      width: 46.25626vw;
      max-width: 800px;
      max-height: 800px;
      margin: 69.95px auto 17.95px;
      grid-row: 1 / 3;
      grid-column: 1 / 2;
    }

    .geology {
      width: 163px;
      bottom: 3.6vw;
    }

    .mercury {
      width: 43.53768%;
      height: 43.53768%;
    }

    .venus {
      width: 59.952607%;
      height: 59.952607%;
    }

    .earth,
    .neptune {
      width: 67.535545%;
      height: 67.535545%;
    }

    .mars {
      width: 50.473934%;
      height: 50.473934%;
    }

    .jupiter {
      width: 87.440758%;
      height: 87.440758%;
    }

    .uranus {
      width: 68.720379%;
      height: 68.720379%;
    }
  }
</style>
