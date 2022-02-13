<script>
  import Button from "$lib/MenuBtn.svelte";
  import Nav from "$lib/Navigation.svelte";

  export let planets;
</script>

<header>
  <div class="container">
    <h2>The planets</h2>
    <Button />
  </div>
  <Nav {planets} />
</header>

<style>
  header {
    border-bottom: 1px solid hsl(var(--white-opaque) / 0.2);
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
      padding: 1.375rem 2.5625rem 1.6875rem 2rem;
    }

    .container {
      padding: 0;
    }
  }
</style>
