<script>
  export let planet;
  export let wideScreen;
  export let current = "overview";
</script>

<section>
  <ul role="tablist">
    <li
      class={current === "overview" ? "active" : ""}
      style:border-color={`var(--${planet.toLowerCase()})`}
      style:background-color={current === "overview" && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"}
      on:click={() => (current = "overview")}
      role="tab"
      tabindex="0"
      aria-controls="overview-tab"
      aria-selected={current === "overview" ? true : false}
    >
      <span aria-hidden="true" class="number">01</span>
      Overview
    </li>
    <li
      class={current === "structure" ? "active" : ""}
      style:border-color={`var(--${planet.toLowerCase()})`}
      style:background-color={current === "structure" && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"}
      on:click={() => (current = "structure")}
      role="tab"
      tabindex="-1"
      aria-controls="structure-tab"
      aria-selected={current === "structure" ? true : false}
    >
      <span aria-hidden="true" class="number">02</span>
      <span class="text">Internal </span>
      Structure
    </li>
    <li
      class={current === "surface" ? "active" : ""}
      style:border-color={`var(--${planet.toLowerCase()})`}
      style:background-color={current === "surface" && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"}
      on:click={() => (current = "surface")}
      role="tab"
      tabindex="-1"
      aria-controls="surface-tab"
      aria-selected={current === "surface" ? true : false}
    >
      <span aria-hidden="true" class="number">03</span>
      Surface
      <span class="text"> Geology </span>
    </li>
  </ul>
</section>

<style>
  section {
    border-bottom: 1px solid hsl(var(--white-opaque) / 0.2);
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem 0;
    max-width: 30rem;
    margin: 0 auto;
  }

  li {
    color: hsl(var(--white-opaque) / 0.5);
    font-size: 0.5625rem;
    font-weight: 700;
    letter-spacing: 1.92857px;
    line-height: 0.625rem;
    text-transform: uppercase;
    padding: 0 4px 17px;
  }

  .number,
  .text {
    display: none;
  }

  .active {
    border-bottom: 4px solid;
    color: var(--text);
  }

  @media (min-width: 768px) {
    section {
      border-bottom: none;
    }

    ul {
      display: block;
      max-width: unset;
      padding: 3.5rem 2.5rem 0;
    }

    li {
      color: var(--text);
      line-height: 1.5625rem;
      outline: 1px solid hsl(var(--white-opaque) / 0.2);
      padding: 0.5rem 1.25rem;
    }

    li + li {
      margin-top: 1rem;
    }

    li + .active {
      outline: none;
    }

    .number,
    .text {
      display: unset;
    }

    .number {
      opacity: 0.5;
      margin-right: 0.875rem;
    }
  }

  @media (min-width: 1000px) {
    section {
      grid-row: 2;
      grid-column: 2;
    }

    li {
      font-size: 0.75rem;
      letter-spacing: 2.57143px;
    }
  }
</style>
