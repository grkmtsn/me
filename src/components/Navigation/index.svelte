<script>
  import { activePage as activePageState } from "../../store";
  function setActivePage(page) {
    activePageState.update(p => (p = page));
  }
  export let activePage;
</script>

<div>
  <ul class="flex list-none text-gray-400 font-bold">
    <li
      on:click={() => setActivePage(1)}
      class={`cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${activePage === 1 ? 'text-gray-700' : ''}`}>
      ABOUT
    </li>
    <li
      on:click={() => setActivePage(2)}
      class={`cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${activePage === 2 ? 'text-gray-700' : ''}`}>
      EXPERIENCE
    </li>
    <li
      on:click={() => setActivePage(3)}
      class={`cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${activePage === 3 ? 'text-gray-700' : ''}`}>
      SKILLS
    </li>
    <li
      on:click={() => setActivePage(4)}
      class={`cursor-pointer transition duration-500 hover:text-gray-700 ${activePage === 4 ? 'text-gray-700' : ''}`}>
      CONTACT
    </li>
  </ul>
</div>
