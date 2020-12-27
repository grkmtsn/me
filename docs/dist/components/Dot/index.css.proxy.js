// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".dot.svelte-dv7d02{position:absolute;bottom:7px;left:341px;width:15px;height:15px;display:block;z-index:100;border-radius:50%;transition:all 0.5s ease;top:calc(100% - 21px)}.dot.page-2.svelte-dv7d02{top:6px}.dot.page-3.svelte-dv7d02{top:6px;left:185px}.dot.page-4.svelte-dv7d02{top:0;left:520px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}