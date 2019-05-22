<slot>
	<input bind:this={input} {...props} />
</slot>

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

	export let value = '';
	export let element;

	let { options = {}, ...props } = $$props;

	let input, fp;

	$: if (fp) fp.setDate(value);

	onMount(() => {
		const elem = element || input
		fp = flatpickr(elem, {
			...addHooks(options),
			...element ? { wrap: true } : {}
		});

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
