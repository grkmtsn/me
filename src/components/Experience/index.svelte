<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import NextButton from "../NextButton/index";

  import { works } from "../../constants";

  const buttonProps = {
    nextPageIndex: 3,
    nextPageNumber: "03",
    nextPageText: "SKILLS"
  };
</script>

<style>
  .timeline {
    width: 600px;
    height: 100%;
    top: 62px;
    left: 231px;
  }
  .timeline::before {
    content: "";
    position: absolute;
    top: -48px;
    left: 116px;
    bottom: 0px;
    width: 3px;
    background: #ddd;
  }

  .timeline .timeline-item {
    clear: both;
    text-align: left;
    position: relative;
  }

  .timeline .timeline-item .date {
    margin-bottom: 0.5em;
    float: left;
    width: 117px;
    padding-right: 30px;
    text-align: right;
    position: relative;
    font-size: 14px;
    color: #ccc;
    line-height: 1.75em;
  }

  .timeline .timeline-item .date::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: rgba(196, 181, 253, var(--tw-bg-opacity));
    border-radius: 100%;
    right: -8px;
    top: 4px;
    z-index: 99;
  }

  .timeline .timeline-item .body {
    margin: 0 0 3em;
    float: right;
    width: 80%;
    padding-left: 30px;
  }
</style>

<div
  transition:fly={{ duration: 1000, x: -15, y: 0, opacity: 0, easing: quintOut }}
  class="absolute left-52 text-lg font-semibold">
  EXPERIENCE
</div>
<div
  class="timeline absolute"
  transition:fly={{ duration: 1000, x: 0, y: 15, opacity: 0, easing: quintOut }}>
  {#each works as item, index}
    <div
      class="timeline-item"
      transition:fly={{ delay: 150 * index, duration: 1000, x: 0, y: 15, opacity: 0, easing: quintOut }}>
      <div class="date">{item.date}</div>
      <div class="body">
        <h3 class="text-lg font-semibold">{item.title}</h3>
        <h6 class=" text-sm font-semibold">{item.brand}</h6>
      </div>
    </div>
  {/each}
</div>
<NextButton {...buttonProps} />
