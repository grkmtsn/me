import './index.css.proxy.js';
/* src\components\Skills\index.svelte generated by Svelte v3.31.0 */
import {
	SvelteComponent,
	add_render_callback,
	assign,
	attr,
	check_outros,
	create_bidirectional_transition,
	create_component,
	create_in_transition,
	create_out_transition,
	destroy_component,
	destroy_each,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../../../web_modules/svelte/internal.js";

import { fly, fade } from "../../../web_modules/svelte/transition.js";
import { quintOut } from "../../../web_modules/svelte/easing.js";
import NextButton from "../NextButton/index.js";
import { skills } from "../../constants/index.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (32:2) {#each skills as item, index}
function create_each_block(ctx) {
	let img;
	let img_alt_value;
	let img_src_value;
	let img_style_value;
	let img_intro;
	let img_outro;
	let current;

	return {
		c() {
			img = element("img");
			attr(img, "alt", img_alt_value = /*item*/ ctx[1].alt);
			if (img.src !== (img_src_value = /*item*/ ctx[1].src)) attr(img, "src", img_src_value);
			attr(img, "style", img_style_value = `top: ${/*item*/ ctx[1].top}; left: ${/*item*/ ctx[1].left}; width: ${/*item*/ ctx[1].width}`);
			attr(img, "class", "svelte-1jwlqnf");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (img_outro) img_outro.end(1);

				if (!img_intro) img_intro = create_in_transition(img, fade, {
					delay: /*index*/ ctx[3] * 100,
					duration: 500
				});

				img_intro.start();
			});

			current = true;
		},
		o(local) {
			if (img_intro) img_intro.invalidate();
			img_outro = create_out_transition(img, fade, { duration: 300 });
			current = false;
		},
		d(detaching) {
			if (detaching) detach(img);
			if (detaching && img_outro) img_outro.end();
		}
	};
}

function create_fragment(ctx) {
	let div0;
	let div0_transition;
	let t1;
	let div1;
	let t2;
	let nextbutton;
	let current;
	let each_value = skills;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const nextbutton_spread_levels = [/*buttonProps*/ ctx[0]];
	let nextbutton_props = {};

	for (let i = 0; i < nextbutton_spread_levels.length; i += 1) {
		nextbutton_props = assign(nextbutton_props, nextbutton_spread_levels[i]);
	}

	nextbutton = new NextButton({ props: nextbutton_props });

	return {
		c() {
			div0 = element("div");
			div0.textContent = "SKILLS";
			t1 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			create_component(nextbutton.$$.fragment);
			attr(div0, "class", "absolute left-52 text-lg font-semibold");
			attr(div1, "class", "canvas svelte-1jwlqnf");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			insert(target, t1, anchor);
			insert(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			insert(target, t2, anchor);
			mount_component(nextbutton, target, anchor);
			current = true;
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (dirty & /*skills*/ 0) {
				each_value = skills;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			const nextbutton_changes = (dirty & /*buttonProps*/ 1)
			? get_spread_update(nextbutton_spread_levels, [get_spread_object(/*buttonProps*/ ctx[0])])
			: {};

			nextbutton.$set(nextbutton_changes);
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div0_transition) div0_transition = create_bidirectional_transition(
					div0,
					fly,
					{
						duration: 1000,
						x: -15,
						y: 0,
						opacity: 0,
						easing: quintOut
					},
					true
				);

				div0_transition.run(1);
			});

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(nextbutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (!div0_transition) div0_transition = create_bidirectional_transition(
				div0,
				fly,
				{
					duration: 1000,
					x: -15,
					y: 0,
					opacity: 0,
					easing: quintOut
				},
				false
			);

			div0_transition.run(0);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(nextbutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching && div0_transition) div0_transition.end();
			if (detaching) detach(t1);
			if (detaching) detach(div1);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t2);
			destroy_component(nextbutton, detaching);
		}
	};
}

function instance($$self) {
	const buttonProps = {
		nextPageIndex: 4,
		nextPageNumber: "04",
		nextPageText: "CONTACT"
	};

	return [buttonProps];
}

class Skills extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Skills;