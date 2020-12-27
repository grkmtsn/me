<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import { activePage } from "../../store.js";

  function setActivePage(page) {
    activePage.update(p => (p = page));
  }

  export let nextPageIndex;
  export let nextPageNumber;
  export let nextPageText;
</script>

<div
  on:click={() => setActivePage(nextPageIndex)}
  class="absolute bottom-0 right-0 cursor-pointer"
  in:fly={{ duration: 1000, x: 0, y: 15, opacity: 0, easing: quintOut }}
  out:fly={{ duration: 1000, x: 50, y: 0, opacity: 0, easing: quintOut }}>
  <span class="text-gray-300 font-bold mb-3">{nextPageNumber}</span>
  <div class="flex items-center">
    <span class="text-lg font-bold mr-3">{nextPageText}</span>
    <img class="w-10" src="/arrow-rg.png" alt="arrow" />
  </div>
</div>
