<script>
  import { fly } from "svelte/transition";

  export let name;
  export let overview;
  export let structure;
  export let geology;
  export let currentTab;
</script>

<section>
  <h1>{name}</h1>

  {#key name}
    {#if currentTab === 2}
      <div in:fly={{ x: 100 }} id="structure-tab">
        <p>{structure.content}</p>
        <p class="source">
          Source : <a href={structure.source} target="_blank">Wikipedia </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            ><path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            /></svg
          >
        </p>
      </div>
    {:else if currentTab === 3}
      <div in:fly={{ x: 100 }} id="surface-tab">
        <p>{geology.content}</p>
        <p class="source">
          Source : <a href={geology.source} target="_blank">Wikipedia </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            ><path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            /></svg
          >
        </p>
      </div>
    {:else}
      <div in:fly={{ x: 100 }} id="overview-tab">
        <p>{overview.content}</p>
        <p class="source">
          Source : <a href={overview.source} target="_blank">Wikipedia</a>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
          ><path
            fill="#FFF"
            d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
            opacity=".5"
          /></svg
        >
      </div>
    {/if}
  {/key}
</section>

<style>
  section {
    padding: 0 1.5rem;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3.25rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    max-width: 30rem;
    margin: 0 auto;
  }

  .source {
    margin-top: 2rem;
    opacity: 0.5;
  }

  a {
    font-weight: 700;
  }

  .source,
  svg {
    display: inline-block;
  }

  svg {
    padding: 3px 0 0 3px;
    overflow: visible;
  }

  @media (min-width: 768px) {
    section {
      text-align: left;
      grid-column: 1 / 2;
      order: -1;
      padding: 0 69px 0 2.5rem;
    }

    h1 {
      font-size: 3rem;
      line-height: 3.875rem;
      margin-bottom: 1.5rem;
    }

    p {
      margin: unset;
      max-width: 35rem;
    }
  }

  @media (min-width: 1250px) {
    section {
      grid-column: 2;
      grid-row: 1;
      padding: 126px 10.3125rem 2.4375rem 0;
    }

    h1 {
      font-size: 5rem;
      line-height: 6.5rem;
      margin-bottom: 1.4375rem;
    }

    .source {
      margin-top: 1.5rem;
    }
  }
</style>
