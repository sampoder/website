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
}
