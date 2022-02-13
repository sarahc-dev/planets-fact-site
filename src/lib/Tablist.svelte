<script>
  export let planet;
  export let wideScreen;
  export let currentTab = 1;

  let newIndex;

  function changeTabFocus(e) {
    const keydownUp = 38;
    const keydownDown = 40;

    if (e.keyCode !== keydownUp && e.keyCode !== keydownDown) return;

    const current = document.activeElement;
    const listItems = [...document.getElementsByTagName("li")];
    const currentIndex = listItems.indexOf(current);

    if (e.keyCode === keydownUp) {
      newIndex = (currentIndex + listItems.length - 1) % listItems.length;
    } else if (e.keyCode === keydownDown) {
      newIndex = (currentIndex + 1) % listItems.length;
    }

    current.blur();
    listItems[newIndex].focus();
  }

  function selectTab(e) {
    // when enter key is pressed
    if (e.keyCode === 13) {
      currentTab = newIndex + 1;
    }
  }
</script>

<div>
  <ul role="tablist" on:keydown={changeTabFocus}>
    <li
      class={currentTab === 1 ? "active" : ""}
      style:border-color={`var(--${planet.toLowerCase()})`}
      style:background-color={currentTab === 1 && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"}
      on:click={() => (currentTab = 1)}
      on:keydown={selectTab}
      role="tab"
      tabindex={currentTab === 1 ? 0 : -1}
      aria-controls="overview-tab"
      aria-selected={currentTab === 1 ? true : false}
    >
      <span aria-hidden="true" class="number">01</span>
      Overview
    </li>
    <li
      class={currentTab === 2 ? "active" : ""}
      style:border-color={`var(--${planet.toLowerCase()})`}
      style:background-color={currentTab === 2 && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"}
      on:click={() => (currentTab = 2)}
      on:keydown={selectTab}
      role="tab"
      tabindex={currentTab === 2 ? 0 : -1}
      aria-controls="structure-tab"
      aria-selected={currentTab === 2 ? true : false}
    >
      <span aria-hidden="true" class="number">02</span>
      <span class="text">Internal </span>
      Structure
    </li>
    <li
      class={currentTab === 3 ? "active" : ""}
      style:border-color={`var(--${planet.toLowerCase()})`}
      style:background-color={currentTab === 3 && wideScreen ? `var(--${planet.toLowerCase()})` : "transparent"}
      on:click={() => (currentTab = 3)}
      on:keydown={selectTab}
      role="tab"
      tabindex={currentTab === 3 ? 0 : -1}
      aria-controls="surface-tab"
      aria-selected={currentTab === 3 ? true : false}
    >
      <span aria-hidden="true" class="number">03</span>
      Surface
      <span class="text"> Geology </span>
    </li>
  </ul>
</div>

<style>
  div {
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
    cursor: pointer;
  }

  li:hover:not(.active) {
    background-color: hsl(0, 0%, 85%, 0.2) !important;
  }

  li:focus-visible {
    outline-offset: 4px;
  }

  .number,
  .text {
    display: none;
  }

  .active {
    border-bottom: 4px solid;
    color: var(--text);
    outline: none;
  }

  @media (min-width: 768px) {
    div {
      border-bottom: none;
    }

    ul {
      display: block;
      max-width: unset;
      padding: 3.5rem 2.5rem 0 0;
    }

    li {
      color: var(--text);
      line-height: 1.5625rem;
      outline: 1px solid hsl(var(--white-opaque) / 0.2);
      padding: 0.5rem 1.25rem 0.4375rem;
    }

    li + li {
      margin-top: 1rem;
    }

    li:focus-visible {
      outline: 2px solid white;
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

  @media (min-width: 1250px) {
    div {
      grid-row: 2;
      grid-column: 2;
    }

    ul {
      padding: 0 10.3125rem 2rem 0;
    }

    li {
      font-size: 0.75rem;
      letter-spacing: 2.57143px;
    }
  }

  @media (min-width: 1300px) {
    li {
      padding: 0.75rem 1.75rem 0.6875rem;
    }
  }
</style>
