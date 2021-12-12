<script>
	let title = 'Sam Poder';
	let name = 'Sam Poder'; // site name
	let description = `I'm experimenting, making things for people to enjoy and having fun!`; // page description
	let image =
		'https://cloud-fyymb4lxt-hack-club-bot.vercel.app/0screenshot_2021-04-13_at_10.47.58_pm-min.png'; // social card image URL
	const makeTitle = (title, name) => (title === name ? title : `${title} – ${name}`);
</script>

<svelte:head>
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={name} />
	<title>{makeTitle(title, name)}</title>
	<meta property="og:title" content={makeTitle(title, name)} />
	<meta name="twitter:title" content={makeTitle(title, name)} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
	<link rel="apple-touch-icon" sizes="180x180" href={`/favicon.png`} />
	<link rel="icon" type="image/png" sizes="32x32" href={`/favicon.png`} />
	<link rel="icon" type="image/png" sizes="16x16" href={`/favicon.png`} />
</svelte:head>>
