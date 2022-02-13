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
  import "../global.css";
  import Header from "$lib/Header.svelte";

  export let planets;
</script>

<svelte:head>
  <title>Frontend Mentor | Planets fact site</title>
</svelte:head>

<Header {planets} />
<slot />
