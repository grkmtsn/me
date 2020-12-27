<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import NextButton from "../NextButton/index";

  import { skills } from "../../constants";

  const buttonProps = {
    nextPageIndex: 4,
    nextPageNumber: "04",
    nextPageText: "CONTACT"
  };
</script>

<style>
  .canvas {
    position: absolute;
    right: 655px;
    height: 300px;
  }

  .canvas img {
    position: absolute;
    max-width: unset;
  }
</style>

<div
  transition:fly={{ duration: 1000, x: -15, y: 0, opacity: 0, easing: quintOut }}
  class="absolute left-52 text-lg font-semibold">
  SKILLS
</div>
<div class="canvas">
  {#each skills as item, index}
    <img
      in:fade={{ delay: index * 100, duration: 500 }}
      out:fade={{ duration: 300 }}
      alt={item.alt}
      src={item.src}
      style={`top: ${item.top}; left: ${item.left}; width: ${item.width}`} />
  {/each}
</div>
<NextButton {...buttonProps} />
