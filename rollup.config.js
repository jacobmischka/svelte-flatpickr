import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';

export default {
	input: './src/index.js',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs'
		},
		{
			file: 'dist/index.js',
			format: 'es'
		}
	],
	plugins: [
		svelte({
			include: 'src/*.html'
		}),
		babel({
			exclude: 'node_modules/**'
		})
	],
	external: [
		'flatpickr'
	]
};
