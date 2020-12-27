<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import NextButton from "../NextButton/index";

  const buttonProps = {
    nextPageIndex: 2,
    nextPageNumber: "02",
    nextPageText: "EXPERIENCE"
  };
</script>

<div
  transition:fly={{ duration: 1000, x: 15, y: 0, opacity: 0, easing: quintOut }}
  class="absolute text-sm -right-10 top-10 w-56 description">
  <div class="mb-3">Based in Istanbul</div>
  <div>4 Years of professional experience. More than 15 projects.</div>
</div>
<div
  class="absolute left-0 bottom-0"
  transition:fly={{ duration: 1000, x: -15, y: 0, opacity: 0, easing: quintOut }}>
  <div class="text-2xl">Görkem Tosun</div>
  <div class="text-5xl">FRONTEND</div>
  <div>
    <span class="text-5xl font-extrabold text-purple-300">/</span>
    <span class="text-5xl font-extrabold">DEVELOPER</span>
  </div>
</div>
<NextButton {...buttonProps} />
