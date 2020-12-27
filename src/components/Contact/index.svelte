<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import NextButton from "../NextButton/index";

  import { contacts } from "../../constants";

  const buttonProps = {
    nextPageIndex: 1,
    nextPageNumber: "01",
    nextPageText: "ABOUT"
  };
</script>

<div class="text-center">
  <h3
    transition:fly={{ duration: 1000, x: 0, y: 15, opacity: 0, easing: quintOut }}
    class="text-6xl font-black mb-20">
    Say Hı
  </h3>
  <div class="flex justify-center items-center">
    {#each contacts as item, index}
      <a
        transition:fly={{ delay: index * 100, duration: 1000, x: 0, y: 15, opacity: 0, easing: quintOut }}
        href={item.href}
        target="_blank"
        class="flex justify-center items-center flex-col w-48">
        <div class="flex justify-center items-center flex-col w-16">
          <img class="mb-5" src={item.icon} alt={item.title} />
          <div class="font-bold">{item.title}</div>
        </div>
        <div class="text-sm font-medium">{item.text}</div>
      </a>
    {/each}
  </div>
</div>
<NextButton {...buttonProps} />
