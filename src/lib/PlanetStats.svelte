<script>
  export let rotation;
  export let revolution;
  export let radius;
  export let temp;
</script>

<section class="stats">
  <div class="box">
    <h3 class="description">Rotation time</h3>
    <p class="stat">{rotation}</p>
  </div>
  <div class="box">
    <h3 class="description">Revolution time</h3>
    <p class="stat">{revolution}</p>
  </div>
  <div class="box">
    <h3 class="description">Radius</h3>
    <p class="stat">{radius}</p>
  </div>
  <div class="box">
    <h3 class="description">Average Temp.</h3>
    <p class="stat">{temp}</p>
  </div>
</section>

<style>
  .stats {
    text-transform: uppercase;
    padding: 1.75rem 1.5rem 2.9375rem;
  }

  .box {
    border: 1px solid hsl(var(--white-opaque) / 0.2);
    padding: 0.5625rem 1.5rem 0.8125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 30rem;
    margin: 0 auto;
  }

  .box + .box {
    margin-top: 0.5rem;
  }

  h3 {
    font-size: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.727273px;
    line-height: 1rem;
    opacity: 0.5;
  }

  .stat {
    font-family: "Antonio", sans-serif;
    font-size: 1.25rem;
    letter-spacing: -0.75px;
    line-height: 1.625rem;
  }

  @media (min-width: 768px) {
    section {
      grid-column: 1 / 3;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.625rem 2.5rem 2.25rem;
    }

    .box {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.375rem;
      width: 100%;
      max-width: 10.25rem;
      padding: 1rem 0.9375rem 1.1875rem;
      margin: unset;
    }

    .box + .box {
      margin-top: 0;
    }

    .stat {
      font-size: 1.5rem;
      letter-spacing: -0.9px;
      line-height: 1.9375rem;
    }
  }

  @media (min-width: 1000px) {
    .box {
      max-width: 15.9375rem;
      padding: 1.25rem 1.4375rem 1.6875rem;
      gap: 0.25rem;
    }

    .description {
      font-size: 0.6875rem;
      letter-spacing: 1px;
      line-height: 1.5625rem;
    }

    .stat {
      font-size: 2.5rem;
      letter-spacing: -1.5px;
      line-height: 3.25rem;
    }
  }

  @media (min-width: 1250px) {
    .stats {
      padding: 0 10.3125rem 3.5rem;
    }
  }
</style>
