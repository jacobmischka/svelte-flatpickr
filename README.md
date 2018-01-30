# svelte-flatpickr

## Usage

Ideally, if you're using svelte already, configure your bundler to resolve the package's `svelte` field (or import from `svelte-flatpickr/src/Flatpickr.html`) and compile the template from within your own project. See [sveltejs/svelte#604](https://github.com/sveltejs/svelte/issues/604) for more information.

Don't forget to import flatpickr's stylesheets as well.

### Example

```html
<div>
	<Flatpickr options="{{ flatpickrOptions }}"
		bind:value="date"
		on:change="handleChange(...event)" />
</div>

<script>
import Flatpickr from 'svelte-flatpickr';

import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/light.css';

export default {
	data() {
		return {
			date: null,
			flatpickrOptions: {
				enableTime: true,
				onChange(selectedDates, dateStr, instance) {
					console.log('Options onChange handler')
				}
			}
		}
	},

	methods: {
		handleChange(selectedDates, dateStr, instance) {
			console.log('Svelte onChange handler');
		}
	},

	components: {
		Flatpickr
	}
};
</script>
```

The selected date(s) can be obtained using hooks or binding to `value`.

### Hooks

Hooks can be specified normally in the options object, or by listening to the svelte event.

When binding svelte handler, `event` will be `[ selectedDates, dateStr, instance ]` (see [flatpickr events docs][flatpickr-events]). You'll likely want to call your handler with `handleChange(...event)` like in the example above, or with `handleChange(event[0][0])` to get the selected date.

[flatpickr-events]: https://chmln.github.io/flatpickr/events/
