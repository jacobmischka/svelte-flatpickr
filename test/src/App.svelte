<main>
	<form on:submit={handleSubmit}>
		<Flatpickr {options} bind:value on:change={handleChange} name="date" />

		<button type="submit">
			Submit
		</button>
	</form>
</main>

<script>
	import Flatpickr from '../../src/Flatpickr.svelte';

	let value;

	const options = {
		enableTime: true,
		onChange(selectedDates, dateStr) {
			console.log('flatpickr hook', selectedDates, dateStr);
		}
	};

	$: console.log({ value });

	function handleChange(event) {
		const [ selectedDates, dateStr ] = event.detail;
		console.log({ selectedDates, dateStr });
	}

	function handleSubmit(event) {
		event.preventDefault();

		console.log(event.target.elements['date'].value);
	}
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
