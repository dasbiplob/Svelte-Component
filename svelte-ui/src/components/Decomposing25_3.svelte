<script>
    // JavaScript goes here
    import BestJoke from "./BestJoke.svelte";
    import LivingLocations from "./LivingLocations.svelte";
    import AgeDescription from "./AgeDescription.svelte";
    let { name } = $props();
    let age = $state(0);
  
    //let locations = ["Helsinki", "Espoo", "Vantaa"];
    const grow = () => {
      age++;
    };
  </script>

<!-- HTML template goes here -->
<p>My name is {name}. I am {age} year{age == 1 ? "" : "s"} old.</p>
{#if age >= 18}
  <p>I am (legally) an adult (in Finland).</p>
{:else if age >= 4}
  <p>I am a child.</p>
{:else if age >= 1}
  <p>I am a toddler.</p>
{:else}
  <p>I am a baby.</p>
{/if}
<AgeDescription {age} />
<button on:click={grow}>Grow</button>

<BestJoke />
<LivingLocations />
