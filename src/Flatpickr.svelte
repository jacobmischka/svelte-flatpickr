<input bind:this={input} type="date" {value} class={className} {placeholder} />

<script>
	/** @format */
	import { onMount, createEventDispatcher } from 'svelte';
	import flatpickr from 'flatpickr';

	const hooks = new Set([
		'onChange',
		'onOpen',
		'onClose',
		'onMonthChange',
		'onYearChange',
		'onReady',
		'onValueUpdate',
		'onDayCreate'
	]);

	export let value = '', placeholder = '', options = {};

	let className = '';
	export { className as class };

	let input, fp;


	$: if (fp) fp.setDate(value);

	onMount(() => {
		console.log(input);
		fp = flatpickr(input, addHooks(options));

		return () => {
			fp.destroy();
		}
	});

	const dispatch = createEventDispatcher();

	$: if (fp) for (const [key, val] of Object.entries(addHooks(options))) {
		fp.set(key, val);
	}

	function addHooks(opts = {}) {
		opts = Object.assign({}, opts);

		for (const hook of hooks) {
			const firer = (selectedDates, dateStr, instance) => {
				dispatch(stripOn(hook), [selectedDates, dateStr, instance]);
			};

			if (hook in opts) {
				// Hooks must be arrays
				if (!Array.isArray(opts[hook]))
					opts[hook] = [opts[hook]];

				opts[hook].push(firer);
			} else {
				opts[hook] = [firer];
			}
		}

		if (opts.onChange && !opts.onChange.includes(updateValue))
			opts.onChange.push(updateValue);

		return opts;
	}

	function updateValue(newValue) {
		value = (Array.isArray(newValue) && newValue.length === 1)
			? newValue[0]
			: newValue;
	}

	function stripOn(hook) {
		return hook.charAt(2).toLowerCase() + hook.substring(3);
	}
</script>
