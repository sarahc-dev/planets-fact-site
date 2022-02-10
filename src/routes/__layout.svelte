<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/planets");
    const data = await res.json();

    return {
      props: { planets: data },
    };
  }
</script>

<script>
  export let planets;
  //   console.log(planets);
  import "../global.css";
  import Header from "$lib/Header.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Planets fact site</title>
</svelte:head>

<Header {planets} />
<slot />
