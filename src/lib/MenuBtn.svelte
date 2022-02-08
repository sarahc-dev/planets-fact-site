<script>
  export let open = false;

  // Close menu
  $: outerWidth = 0;
  $: if (outerWidth >= 768) {
    open = false;
  }
</script>

<svelte:window bind:outerWidth />

<button class:open type="button" aria-controls="primary-nav" aria-expanded={open} on:click={() => (open = !open)}>
  <span class="sr-only">Menu</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
  }

  button:hover,
  .open {
    opacity: 0.25;
  }

  @media (min-width: 768px) {
    button {
      display: none;
    }
  }
</style>
