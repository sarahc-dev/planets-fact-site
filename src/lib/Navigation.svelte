<script>
  import { menuOpen } from "./store";
  export let planets;

  let wideScreen;
  let outerWidth = 0;

  $: if (outerWidth >= 768) {
    wideScreen = true;
  } else {
    wideScreen = false;
  }
</script>

<svelte:window bind:outerWidth />

<nav id="primary-nav" class={$menuOpen ? "open" : ""}>
  {#each planets as planet}
    <a
      sveltekit:prefetch
      href={`/${planet.toLowerCase()}`}
      on:click={() =>
        menuOpen.update((status) => {
          return !status;
        })}
      tabindex={!wideScreen && !$menuOpen ? "-1" : "0"}
    >
      <div class="decoration" style:background-color={wideScreen ? `var(--${planet.toLowerCase()})` : `var(--nav-${planet.toLowerCase()})`} />
      {planet}</a
    >
  {/each}
</nav>

<style>
  nav {
    display: flex;
  }

  a {
    font-weight: 700;
    line-height: 1.5625rem;
    text-decoration: unset;
    text-transform: uppercase;
  }

  @media (max-width: 767px) {
    nav {
      background-color: var(--background);
      flex-direction: column;
      min-height: 100vh;
      padding: 1.5rem;
      width: 100%;
      position: absolute;
      left: -100%;
      transition: left 0.3s ease-in-out;
      z-index: 2;
    }
    .open {
      left: 0;
    }

    .decoration {
      display: inline-block;
      height: 20px;
      width: 20px;
      border-radius: 100px;
    }

    a {
      background-image: url("/assets/icon-chevron.svg");
      background-repeat: no-repeat;
      background-position: center right;
      display: flex;
      align-items: center;
      gap: 25px;
      font-size: 0.9375rem;
      letter-spacing: 1.36364px;
      padding: 1.25rem 0;
    }

    a + a {
      border-top: 1px solid hsla(var(--white-opaque) / 0.1);
    }
  }

  @media (min-width: 768px) {
    nav {
      gap: 2.0625rem;
      justify-content: space-between;
      padding: 0 3.25rem 1.6875rem;
    }

    a {
      letter-spacing: 1px;
      opacity: 0.75;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 1;
    }
  }

  @media (min-width: 1000px) {
    nav {
      padding: 0;
    }

    a {
      position: relative;
      font-size: 0.6875rem;
    }

    a:hover .decoration {
      display: inline-block;
      height: 4px;
      width: 100%;
      position: absolute;
      top: -2.0625rem;
    }
  }
</style>
