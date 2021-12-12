<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		let res = await fetch('https://scrapbook.hackclub.com/api/users/sampoder/');
		if (res.ok) {
			return {
				props: {
					items: (await res.json()).posts
				}
			};
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let items = [];
	import Video from "../lib/video.svelte";
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	].map((m) => m.substring(0, 3));
	const convertTimestampToDate = (timestamp) => {
		if (timestamp === null) {
			return '';
		}
		const isToday =
			new Date().toISOString().substring(0, 10) === timestamp.toString().substring(0, 10);
		let date = new Date(timestamp);
		let week = days[date.getDay()];
		let day = date.getDate();
		let monthIndex = date.getMonth();
		let month = monthNames[monthIndex];
		let year = date.getFullYear();
		let hours = date.getHours() || 0;
		let cleanHours;
		if (hours === 0) {
			cleanHours = 12; // if timestamp is between midnight and 1am, show 12:XX am
		} else {
			cleanHours = hours > 12 ? hours - 12 : hours; // else show proper am/pm
		}
		let minutes = date.getMinutes();
		let stringMinutes = minutes >= 10 ? minutes : '0' + minutes.toString(); // turns 4 minutes into 04 minutes
		let ampm = hours >= 12 ? 'pm' : 'am';
		return isToday ? `${cleanHours}:${stringMinutes}${ampm}` : `${week}, ${month} ${day}`;
	};

	const dataDetector =
		/(<.+?\|?\S+>)|(@\S+)|(`{3}[\S\s]+`{3})|(`[^`]+`)|(_[^_]+_)|(\*[^\*]+\*)|(:[^ .,;`\u2013~!@#$%^&*(){}=\\:"<>?|A-Z]+:)/;

	const formatText = (text) =>
		text
			.split(dataDetector)
			.map((chunk, i) => {
				if (chunk?.startsWith(':') && chunk?.endsWith(':')) {
					return ``;
				}
				if (chunk?.startsWith('@') || chunk?.startsWith('<@')) {
					const punct = /([,!:.'"’”]|’s|'s|\))+$/g;
					const username = chunk.replace(/[@<>]/g, '').replace(punct, '');
					return `<span>@${username}</span>`;
				}
				if (chunk?.startsWith('<')) {
					const parts = chunk.match(/<(([^\|]+)\|)?([^>]+?)>/);
					const url = parts?.[2] || parts[parts.length - 1];
					const children = parts[parts.length - 1]?.replace(/https?:\/\//, '').replace(/\/$/, '');

					return `<a href="${url}" target="_blank" rel="noopener">${children}</a>`;
				}
				if (chunk?.startsWith('```')) {
					return `<pre>${chunk.replace(/```/g, '')}</pre>`;
				}
				if (chunk?.startsWith('`')) {
					return `<code>${chunk.replace(/`/g, '')}</code>`;
				}
				if (chunk?.startsWith('*')) {
					return `<strong>${chunk.replace(/\*/g, '')}</strong>`;
				}
				if (chunk?.startsWith('_')) {
					return `<i>${chunk.replace(/_/g, '')}</i>`;
				}
				return chunk?.replace(/&amp;/g, '&');
			})
			.join('');

	const imageFileTypes = ['jpg', 'jpeg', 'png', 'gif'];

	const audioFileTypes = ['mp3', 'wav', 'aiff', 'm4a'];

	function endsWithAny(suffixes, string) {
		try {
			return suffixes.some(function (suffix) {
				return string.endsWith(suffix);
			});
		} catch {
			return false;
		}
	}
	function generateWidthStyles(length) {
		return `max-width: calc(${length >= 3 ? '33%' : length == 2 ? '50%' : '100%'} - 8px)`;
	}

	let amount = 25;

	function handleClick() {
		amount += 10;
	}
</script>

<svelte:head>
	<title>Home</title>
	<script src="https://unpkg.com/@mux/videojs-kit@latest/dist/index.js"></script>
</svelte:head>

<section>
	<div class="photo-and-name">
		<img src="https://github.com/sampoder.png" alt="Me (Sam Poder)" />
		<div>
			<h1>Sam Poder</h1>
		</div>
	</div>
	<p>
		<a href="https://github.com/sampoder" target="_blank">GitHub</a> ~
		<a href="https://twitter.com/sam_poder" target="_blank">Twitter</a> ~
		<a href="https://instagram.com/sam_poder/" target="_blank">Instagram</a>
	</p>
	<p>
		👋 G'day! My name is Sam and I'm an Australian secondary school student (first year of IB at the
		moment) living in Singapore. I enjoy making things (mostly involving code) and learning about
		random pieces of trivia. Here's what I've been up to recently:
	</p>
	{#each items.slice(0, amount) as item}
		<div>
			<p><b>{convertTimestampToDate(item?.postedAt)}</b></p>
			<p>{@html formatText(item?.text)}</p>
			<p class="attachments">
				{#each item?.attachments.filter((a) => endsWithAny(imageFileTypes, a)) as attachment}
					<!-- svelte-ignore a11y-missing-attribute -->
					<img
						class="post-image"
						src={attachment}
						style={generateWidthStyles(item?.attachments.length)}
						loading="lazy"
					/>
				{/each}
				{#each item?.attachments.filter((a) => endsWithAny(audioFileTypes, a)) as attachment}
					<audio src={attachment} controls preload="metadata" />
				{/each}
				{#each item?.mux as attachment}
					<Video mux="{attachment}" />
				{/each}
			</p>
			<hr />
		</div>
	{/each}
	You seem to have reached the end... <span class="load-more" on:click={handleClick}>load more</span>?
</section>

<style>
	section {
		width: 100%;
		max-width: 600px;
		margin: auto;
		margin-top: 72px;
	}

	.photo-and-name {
		align-items: center;
		margin-bottom: 16px;
	}

	h1 {
		margin-block-start: 0em;
		margin-block-end: 0em;
	}

	p {
		margin-block-start: 0em;
		margin-block-end: 0em;
		margin-bottom: 16px;
	}

	.photo-and-name > img {
		height: 80px;
		margin-bottom: 16px;
		border-radius: 8px;
	}

	h1 {
		font-size: 36px;
	}

	.post-image {
		max-width: 100%;
		max-height: 300px;
		background: #eeeeee;
		border-radius: 4px;
		object-fit: cover;
	}

	video {
		width: auto;
	}

	.attachments {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	hr {
		border-color: lightgrey;
		border-style: solid;
		border-width: 0.1px;
	}

	.load-more{
		text-decoration: underline;
	}

	a{
		color: black!important;
	}
</style>
