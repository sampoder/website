import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),
		target: '#svelte',

	    	hooks: {
	      		async handle({ request, resolve }) {
			const referer = request.headers.referer || '';
			const refererHost = new URL(referer).hostname;
	
			if (refererHost.includes('samsmomis.gay')) {
			  const redirectUrl = `https://hackoc.org${request.path}`;
			  return {
			    status: 301,
			    headers: {
			      location: redirectUrl,
			    },
			  };
			}
	
			const response = await resolve(request);
	
			return response;
	      		},
	    	},
	}
};

export default config;
