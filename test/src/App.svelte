<script>
	import Flatpickr from '../../src/Flatpickr.svelte';

	let value = '2020-02-20',
		formattedValue,
		flatpickr;

	let multiple = false;

	let options;
	$: options = {
		mode: multiple ? 'multiple' : 'single',
		enableTime: true,
		onChange(selectedDates, dateStr) {
			console.log('flatpickr hook', selectedDates, dateStr);
		},
		onOpen() {
			console.log('opened');
		},
	};

	$: console.log({ value, formattedValue });

	function handleOpen(event) {
		event.preventDefault();

		if (flatpickr) {
			flatpickr.open();
			flatpickr.calendarContainer.focus();
		}
	}

	function handleChange(event) {
		const [selectedDates, dateStr] = event.detail;
		console.log({ selectedDates, dateStr });
	}

	function handleClear() {
		if (flatpickr) {
			flatpickr.clear();
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		console.log(event.target.elements['date'].value);
	}
</script>

<main>
	<form on:submit={handleSubmit}>
		<Flatpickr
			{options}
			bind:value
			bind:formattedValue
			on:change={handleChange}
			name="date"
			bind:flatpickr
			on:close={() => {
				console.log('closed');
			}}
			dateFormat="Y-m-d"
		/>

		<label>
			<input type="checkbox" bind:checked={multiple} />
			Multiple?
		</label>

		<button type="button" on:click={handleClear}>
			Clear
		</button>
		<button type="button" on:click={handleOpen}>
			Open picker
		</button>

		<button type="submit">
			Submit
		</button>
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
