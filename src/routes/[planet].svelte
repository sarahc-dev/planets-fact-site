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
  export let data;
</script>

<main>
  <h1>{data.name}</h1>
</main>

<style>
  main {
    margin-top: 2rem;
  }
</style>
