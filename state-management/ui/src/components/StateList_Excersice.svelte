<script>
    let items = $state([]);
    const addItem = () => {
      //items.push(`Item ${items.length + 1}`, ...items);
      items = [`Item ${items.length + 1}`, ...items];
    }
  </script>
  
  <label for="item">Type in the item name:</label>
  <input id="item" type="text" bind:value={items} /><br />
  <button on:click={addItem}>Add</button>
  
  <p>The list has {items.length} {items.length === 1 ? "item" : "items"}.</p>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  