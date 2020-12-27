/* src\components\NextButton\index.svelte generated by Svelte v3.31.0 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	create_in_transition,
	create_out_transition,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_data,
	space,
	text
} from "../../../web_modules/svelte/internal.js";

import { fly } from "../../../web_modules/svelte/transition.js";
import { quintOut } from "../../../web_modules/svelte/easing.js";
import { activePage } from "../../store.js";

function create_fragment(ctx) {
	let div1;
	let span0;
	let t0;
	let t1;
	let div0;
	let span1;
	let t2;
	let t3;
	let img;
	let img_src_value;
	let div1_intro;
	let div1_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = element("div");
			span0 = element("span");
			t0 = text(/*nextPageNumber*/ ctx[1]);
			t1 = space();
			div0 = element("div");
			span1 = element("span");
			t2 = text(/*nextPageText*/ ctx[2]);
			t3 = space();
			img = element("img");
			attr(span0, "class", "text-gray-300 font-bold mb-3");
			attr(span1, "class", "text-lg font-bold mr-3");
			attr(img, "class", "w-10");
			if (img.src !== (img_src_value = "/me/assets/icons/arrow-rg.png")) attr(img, "src", img_src_value);
			attr(img, "alt", "arrow");
			attr(div0, "class", "flex items-center");
			attr(div1, "class", "absolute bottom-0 right-0 cursor-pointer");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, span0);
			append(span0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, span1);
			append(span1, t2);
			append(div0, t3);
			append(div0, img);
			current = true;

			if (!mounted) {
				dispose = listen(div1, "click", /*click_handler*/ ctx[4]);
				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (!current || dirty & /*nextPageNumber*/ 2) set_data(t0, /*nextPageNumber*/ ctx[1]);
			if (!current || dirty & /*nextPageText*/ 4) set_data(t2, /*nextPageText*/ ctx[2]);
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (div1_outro) div1_outro.end(1);

				if (!div1_intro) div1_intro = create_in_transition(div1, fly, {
					duration: 1000,
					x: 0,
					y: 15,
					opacity: 0,
					easing: quintOut
				});

				div1_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div1_intro) div1_intro.invalidate();

			div1_outro = create_out_transition(div1, fly, {
				duration: 1000,
				x: 50,
				y: 0,
				opacity: 0,
				easing: quintOut
			});

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (detaching && div1_outro) div1_outro.end();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	function setActivePage(page) {
		activePage.update(p => p = page);
	}

	let { nextPageIndex } = $$props;
	let { nextPageNumber } = $$props;
	let { nextPageText } = $$props;
	const click_handler = () => setActivePage(nextPageIndex);

	$$self.$$set = $$props => {
		if ("nextPageIndex" in $$props) $$invalidate(0, nextPageIndex = $$props.nextPageIndex);
		if ("nextPageNumber" in $$props) $$invalidate(1, nextPageNumber = $$props.nextPageNumber);
		if ("nextPageText" in $$props) $$invalidate(2, nextPageText = $$props.nextPageText);
	};

	return [nextPageIndex, nextPageNumber, nextPageText, setActivePage, click_handler];
}

class NextButton extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			nextPageIndex: 0,
			nextPageNumber: 1,
			nextPageText: 2
		});
	}
}

export default NextButton;