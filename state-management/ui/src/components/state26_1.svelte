<script>
  let items = $state([]);

  const addItem = () => {
    items = [`Item ${items.length + 1}`, ...items]
  }
</script>

<button on:click={addItem}>Add item</button>

<p>Items:</p>
<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
