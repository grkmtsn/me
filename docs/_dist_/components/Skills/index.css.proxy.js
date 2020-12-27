// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".canvas.svelte-1jwlqnf.svelte-1jwlqnf{position:absolute;right:655px;height:300px}.canvas.svelte-1jwlqnf img.svelte-1jwlqnf{position:absolute;max-width:unset}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}