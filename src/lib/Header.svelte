<script>
  import Button from "$lib/MenuBtn.svelte";
  import Nav from "$lib/Navigation.svelte";

  let open = false;
  //   $: console.log(open);

  export let planets;
</script>

<header>
  <div class="container">
    <h2>The planets</h2>
    <Button bind:open />
  </div>
  <Nav bind:nav={open} {planets} />
</header>

<style>
  header {
    border-bottom: 1px solid var(--white-opaque);
  }

  .container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }

  h2 {
    font-size: 1.75rem;
    letter-spacing: -1.05px;
    line-height: 2.25rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .container {
      justify-content: center;
      padding: 2rem 0 2.4375rem;
    }
  }

  @media (min-width: 1000px) {
    header {
      display: flex;
      align-items: end;
      justify-content: space-between;
      padding: 1.375rem 2rem 1.6875rem;
    }

    .container {
      padding: 0;
    }
  }
</style>
