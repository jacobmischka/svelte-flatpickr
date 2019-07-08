# svelte-flatpickr

## Usage

Ideally, if you're using svelte already, configure your bundler to resolve the
package's `svelte` field (or import from `svelte-flatpickr/src/Flatpickr.svelte`) and compile the template from within your own project. See [sveltejs/svelte#604](https://github.com/sveltejs/svelte/issues/604) for more information.

Don't forget to import flatpickr's stylesheets as well.

## Versions

-   For Svelte v3 use v2
-   For Svelte v2.x use v1.x.x
-   For Svelte v1.x use v0.x.x

### Example

```html
<div>
	<Flatpickr options="{ flatpickrOptions }"
		bind:value={date}
		placeholder="optional placeholder"
		on:change="handleChange(...event)" />
</div>

<script>
	import Flatpickr from 'svelte-flatpickr'

	import 'flatpickr/dist/flatpickr.css'
	import 'flatpickr/dist/themes/light.css'

	let date = null
	const flatpickrOptions = {
		enableTime: true,
		onChange: (selectedDates, dateStr, instance) => {
			console.log('Options onChange handler')
		}
	}

	function handleChange(selectedDates, dateStr, instance) {
		console.log('Svelte onChange handler')
	}
</script>
```

The selected date(s) can be obtained using hooks or binding to `value`.

The format of the date expected can be controlled with the prop `dateFormat`, which will take a date format acceptable to Flatpickr.

### Hooks

Hooks can be specified normally in the options object, or by listening to the svelte event.

When binding svelte handler, `event` will be `[ selectedDates, dateStr, instance ]` (see [flatpickr events docs][flatpickr-events]). You'll likely want to call your handler with `handleChange(...event)` like in the example above, or with `handleChange(event[0][0])` to get the selected date.

[flatpickr-events]: https://chmln.github.io/flatpickr/events/

### Custom Element

As per the [flatpickr documentation](https://flatpickr.js.org/examples/#flatpickr-external-elements), it is also possible to wrap a custom element rather than have the component create the input for you. This allows for decoration of the control such as adding a clear button or similar.

You can add the custome element by wrapping it in the Flatpickr component, as it is the default slot. However, it is necessary to pass the selector for the custom element, as the `element` attribute to Flatpickr's options.

Specifying the selector for a custom element automatically adds the `{wrap: true}` option to flatpickr.

```html
<Flatpickr options="{ flatpickrOptions }" bind:value={date} element="#my-picker">
		<div class="flatpickr" id="my-picker">
			<input type="text" placeholder="Select Date.." data-input>

			<a class="input-button" title="clear" data-clear>
					<i class="icon-close"></i>
			</a>
		</div>
</Flatpickr>

<script>
	import Flatpickr from 'svelte-flatpickr'

	import 'flatpickr/dist/flatpickr.css'
	import 'flatpickr/dist/themes/light.css'

	let date = null
	const flatpickrOptions = {
		element: '#my-picker'
	}
</script>
```