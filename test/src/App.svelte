<script>
	import Flatpickr from '../../src/Flatpickr.svelte';

	let value = undefined,
		formattedValue,
		flatpickr;

	let mode = 'single';

	let options;
	$: options = {
		mode,
		defaultDate: mode === 'single' ? '2021-01-01' : ['2022-03-01', '2022-03-04'],
		enableTime: true,
		onChange(selectedDates, dateStr) {
			console.log('flatpickr hook', selectedDates, dateStr);
		},
		onOpen() {
			console.log('opened');
		},
	};

	$: console.log({ value });

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

		<fieldset>
			<legend>Mode</legend>

			<label>
				<input type="radio" bind:group={mode} value="single" />
				Single
			</label>
			<label>
				<input type="radio" bind:group={mode} value="multiple" />
				Multiple
			</label>
			<label>
				<input type="radio" bind:group={mode} value="range" />
				Range
			</label>
		</fieldset>

		<button type="button" on:click={handleClear}>
			Clear
		</button>
		<button type="button" on:click={() => { value = undefined; }}>
			Undefine
		</button>
		<button type="button" on:click={() => { value = []; }}>
			Empty
		</button>
		<button type="button" on:click={() => { value = ""; }}>
			Empty string
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

	fieldset {
		display: inline-block;
	}
</style>
