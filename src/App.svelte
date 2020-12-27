<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import TailwindStyles from "./TailwindStyles.svelte";
  import Logo from "./components/Logo/index.svelte";
  import Nav from "./components/Navigation/index.svelte";
  import Dot from "./components/Dot/index.svelte";

  import About from "./components/About/index.svelte";
  import Experience from "./components/Experience/index.svelte";
  import Skills from "./components/Skills/index.svelte";
  import Contact from "./components/Contact/index.svelte";

  import { activePage } from "./store";

  let activePage_value;

  const unsubscribe = activePage.subscribe(value => {
    setTimeout(() => {
      activePage_value = value;
    }, 500);
  });
</script>

<div
  class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:mx-auto" style="width: 1000px">
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
      <div class="flex justify-between items-center mb-12">
        <Logo />
        <Nav activePage={activePage_value} />
      </div>
      <div class="h-96 relative">
        <Dot activePage={activePage_value} />
        {#if activePage_value === 1}
          <About />
        {/if}
        {#if activePage_value === 2}
          <Experience />
        {/if}
        {#if activePage_value === 3}
          <Skills />
        {/if}
        {#if activePage_value === 4}
          <Contact />
        {/if}
      </div>
    </div>
  </div>
</div>
