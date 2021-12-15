<script context="module" lang="ts">
	export const prerender = false;
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
	import Video from '../components/video.svelte';
	import Meta from '../components/meta.svelte';
	import {
		convertTimestampToDate,
		formatText,
		endsWithAny,
		generateWidthStyles
	} from '../lib/renderers';

	const imageFileTypes = ['jpg', 'jpeg', 'png', 'gif'];

	const audioFileTypes = ['mp3', 'wav', 'aiff', 'm4a'];

	let amount = 25;

	function handleClick() {
		amount += 10;
	}
</script>

<Meta />

<section>
	<div class="photo-and-name">
		<img src="/pfp.jpg" alt="Me (Sam Poder)" />
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
		random pieces of trivia. Here's what I've been up to recently (from my 
		<a href="https://scrapbook.hackclub.com/about/" target="_blank">Scrapbook</a>):
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
					<Video mux={attachment} />
				{/each}
			</p>
			<hr />
		</div>
	{/each}
	You seem to have reached the end...
	{#if amount < items.length}
		<span class="load-more" on:click={handleClick}>show more</span>?
	{:else}
		have a great day :D
	{/if}
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
		width: 80px;
		object-fit: cover;
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

	.load-more {
		text-decoration: underline;
		cursor: pointer;
	}

	a {
		color: black !important;
	}
</style>
