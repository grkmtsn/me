<script>
  export let activePage = 1;
</script>

<style>
  .dot {
    position: absolute;
    bottom: 7px;
    left: 341px;
    width: 15px;
    height: 15px;
    display: block;
    z-index: 100;
    border-radius: 50%;
    transition: all 0.5s ease;
    top: calc(100% - 21px);
  }

  .dot.page-2 {
    top: 6px;
  }
  .dot.page-3 {
    top: 6px;
    left: 185px;
  }
  .dot.page-4 {
    top: 0;
    left: 520px;
  }
</style>

<span
  class={`
    dot bg-purple-300 
    ${activePage === 2 && 'page-2'} 
    ${activePage === 3 && 'page-3'}  
    ${activePage === 4 && 'page-4'}
  `} />
