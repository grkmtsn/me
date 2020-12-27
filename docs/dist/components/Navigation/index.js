/* src\components\Navigation\index.svelte generated by Svelte v3.31.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	space,
	text
} from "../../../web_modules/svelte/internal.js";

import { activePage as activePageState } from "../../store.js";

function create_fragment(ctx) {
	let div;
	let ul;
	let li0;
	let t0;
	let li0_class_value;
	let t1;
	let li1;
	let t2;
	let li1_class_value;
	let t3;
	let li2;
	let t4;
	let li2_class_value;
	let t5;
	let li3;
	let t6;
	let li3_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			ul = element("ul");
			li0 = element("li");
			t0 = text("ABOUT");
			t1 = space();
			li1 = element("li");
			t2 = text("EXPERIENCE");
			t3 = space();
			li2 = element("li");
			t4 = text("SKILLS");
			t5 = space();
			li3 = element("li");
			t6 = text("CONTACT");
			attr(li0, "class", li0_class_value = `cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 1 ? "text-gray-700" : ""}`);
			attr(li1, "class", li1_class_value = `cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 2 ? "text-gray-700" : ""}`);
			attr(li2, "class", li2_class_value = `cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 3 ? "text-gray-700" : ""}`);
			attr(li3, "class", li3_class_value = `cursor-pointer transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 4 ? "text-gray-700" : ""}`);
			attr(ul, "class", "flex list-none text-gray-400 font-bold");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, ul);
			append(ul, li0);
			append(li0, t0);
			append(ul, t1);
			append(ul, li1);
			append(li1, t2);
			append(ul, t3);
			append(ul, li2);
			append(li2, t4);
			append(ul, t5);
			append(ul, li3);
			append(li3, t6);

			if (!mounted) {
				dispose = [
					listen(li0, "click", /*click_handler*/ ctx[2]),
					listen(li1, "click", /*click_handler_1*/ ctx[3]),
					listen(li2, "click", /*click_handler_2*/ ctx[4]),
					listen(li3, "click", /*click_handler_3*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*activePage*/ 1 && li0_class_value !== (li0_class_value = `cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 1 ? "text-gray-700" : ""}`)) {
				attr(li0, "class", li0_class_value);
			}

			if (dirty & /*activePage*/ 1 && li1_class_value !== (li1_class_value = `cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 2 ? "text-gray-700" : ""}`)) {
				attr(li1, "class", li1_class_value);
			}

			if (dirty & /*activePage*/ 1 && li2_class_value !== (li2_class_value = `cursor-pointer mr-14 transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 3 ? "text-gray-700" : ""}`)) {
				attr(li2, "class", li2_class_value);
			}

			if (dirty & /*activePage*/ 1 && li3_class_value !== (li3_class_value = `cursor-pointer transition duration-500 hover:text-gray-700 ${/*activePage*/ ctx[0] === 4 ? "text-gray-700" : ""}`)) {
				attr(li3, "class", li3_class_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	function setActivePage(page) {
		activePageState.update(p => p = page);
	}

	let { activePage } = $$props;
	const click_handler = () => setActivePage(1);
	const click_handler_1 = () => setActivePage(2);
	const click_handler_2 = () => setActivePage(3);
	const click_handler_3 = () => setActivePage(4);

	$$self.$$set = $$props => {
		if ("activePage" in $$props) $$invalidate(0, activePage = $$props.activePage);
	};

	return [
		activePage,
		setActivePage,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class Navigation extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { activePage: 0 });
	}
}

export default Navigation;