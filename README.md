# @jacobmischka/svelte-flatpickr

**Warning: default export currently does not work.** Please see the usage section below.

## Usage

For the time being, import directly from src and compile with svelte in the consuming package.

I haven't yet been able to successfully export a compiled component, but I plan to figure that out soon.

Don't forget to import flatpickr's stylesheets as well.

```js
import Flatpickr from '@jacobmischka/svelte-flatpickr/src/Flatpickr.html';

import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/light.css';
```
