import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
<<<<<<< HEAD
import vercel from '@sveltejs/adapter-vercel';
=======
>>>>>>> 050cc3ba31298a4c884d99dda29a2a180ee4339c

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
<<<<<<< HEAD
		adapter: vercel(),
=======
		adapter: adapter(),
>>>>>>> 050cc3ba31298a4c884d99dda29a2a180ee4339c

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
