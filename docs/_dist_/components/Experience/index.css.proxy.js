// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".timeline.svelte-6y2jew.svelte-6y2jew{width:600px;height:100%;top:62px;left:231px}.timeline.svelte-6y2jew.svelte-6y2jew::before{content:\"\";position:absolute;top:-48px;left:116px;bottom:0px;width:3px;background:#ddd}.timeline.svelte-6y2jew .timeline-item.svelte-6y2jew{clear:both;text-align:left;position:relative}.timeline.svelte-6y2jew .timeline-item .date.svelte-6y2jew{margin-bottom:0.5em;float:left;width:117px;padding-right:30px;text-align:right;position:relative;font-size:14px;color:#ccc;line-height:1.75em}.timeline.svelte-6y2jew .timeline-item .date.svelte-6y2jew::before{content:\"\";position:absolute;width:15px;height:15px;background-color:rgba(196, 181, 253, var(--tw-bg-opacity));border-radius:100%;right:-8px;top:4px;z-index:99}.timeline.svelte-6y2jew .timeline-item .body.svelte-6y2jew{margin:0 0 3em;float:right;width:80%;padding-left:30px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}