import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
	input: './src/Flatpickr.svelte',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: 'SvelteFlatpickr'
		},
		{
			file: pkg.module,
			format: 'es'
		}
	],
	plugins: [
		svelte(),
		resolve()
	],
	external: [
		'flatpickr'
	]
};
