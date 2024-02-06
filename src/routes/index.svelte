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

<section style="margin-top: 72px;">
	<div class="photo-and-name">
		<img src="/pfp.jpg" alt="Me (Sam Poder)" />
		<div>
			<h1>Sam Poder</h1>
		</div>
	</div>
	<p>
		<a href="https://github.com/sampoder" target="_blank">GitHub</a> ~
		<a href="https://twitter.com/sam_poder" target="_blank">Twitter</a> ~
		<a href="https://instagram.com/sam_poder/" target="_blank">Instagram</a> ~
		<a href="https://social.dino.icu/@sampoder" target="_blank" rel="me">Mastodon</a>
	</p>
	<p>
		👋 G'day! My name is Sam. I'm an Australian who grew up in Singapore; nowadays, I'm living in the United States and learning all about computers at Berkeley. <i>{["Go bears!", "Roll on you bears!", "Hack yeah!"][Math.floor(Math.random() * 3)]}</i>
	</p>
	<p>
		I enjoy making things (mostly involving code), running 
		<a href="https://www.youtube.com/watch?v=PnK4gzO6S3Q" target="_blank">ha</a><a href="https://lioncityhacks.com/" target="_blank">ck</a><a href="https://photos.app.goo.gl/pd5MprLVn7ZDixv17" target="_blank">at</a><a href="https://youtu.be/KLx4NZZPzMc" target="_blank">ho</a><a href="https://youtu.be/O1s5HqSqKi0" target="_blank">ns</a> 
		and learning about random pieces of trivia. 
	</p>
	<p>
		Here are a couple of projects I'm proud of:
	</p>
</section>
<div class="grid-2">
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/O1s5HqSqKi0" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/KLx4NZZPzMc" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/PnK4gzO6S3Q" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/afwQkr5UHpE" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/61iu_7Zdmus" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/rKdtwhdaGHI" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
</div>
<div class="grid-3">
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/hackclub/hackclub" class="repo-name">hackclub<b>/hackclub</b></a>
	  </div>
	  <p class="repo-description">
	  	🌎 Hack Club is a worldwide community of high school hackers.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color javascript"></span>
		  <span class="language-name">JavaScript</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/sampoder/berowra" class="repo-name"><b>berowra</b></a>
	  </div>
	  <p class="repo-description">
		  🔵 An open source CMS built for hackers and hobbyists.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color python"></span>
		  <span class="language-name">Python</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/hackclub/scrapbook" class="repo-name">hackclub<b>/scrapbook</b></a>
	  </div>
	  <p class="repo-description">
		  🔥 A daily streak system & portfolio for your projects.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color javascript"></span>
		  <span class="language-name">JavaScript</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/sampoder/climatator" class="repo-name"><b>climatator</b></a>
	  </div>
	  <p class="repo-description">
		  🌏 A 4D multimedia experience showcasing the upcoming challenges caused by global warming.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color python"></span>
		  <span class="language-name">Python</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/sampoder/sound-festival" class="repo-name"><b>sound-festival</b></a>
	  </div>
	  <p class="repo-description">
		  🎶 An interactive sound festival built for Innovation Week 2021 (built using Sonic Pi).
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color ruby"></span>
		  <span class="language-name">Ruby</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/hackclub/assemble" class="repo-name">hackclub<b>/assemble</b></a>
	  </div>
	  <p class="repo-description">
		  🌁 The behind-the-scenes of the first high school hackathon since the pandemic!
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color assembly"></span>
		  <span class="language-name">Assembly</span>
		</div>
	  </div>
	</div>
</div>
<section style="margin-top: 36px;">
	<p>
		Here's what I've been up to recently (from my 
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
	}
	
	.grid-2 {
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  gap: 16px;
	  margin-bottom: 16px;
	}
	
	.grid-3 {
	  display: grid;
	  grid-template-columns: 1fr 1fr 1fr;
	  gap: 8px;
	  margin-top: 8px;
	}
	
	@media screen and (max-width: 768px) {
	  .grid-2, .grid-3 {
		grid-template-columns: 1fr;
	  }
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
	
	.repo-container {
	  border: 1px solid #e1e4e8;
	  border-radius: 8px;
	  margin-bottom: 0px;
	  padding: 16px;
	}
	
	.repo-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 8px;
	}
	
	.repo-name {
	  font-size: 16px;
	  color: #2f81f7!important;
	  text-decoration: none;
	}
	
	b {
		font-weight: 600;
	}
	
	.repo-description {
	  color: #586069;
	  font-size: 14px;
	  margin-bottom: 8px;
	}
	
	.repo-stats {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 12px;
	  color: #586069;
	}
	
	.repo-stats span {
	  margin-right: 8px;
	}
	
	.repo-language {
	  display: flex;
	  align-items: center;
	}
	
	.language-color {
	  display: inline-block;
	  width: 12px;
	  height: 12px;
	  border-radius: 50%;
	  margin-right: 8px;
	}
	
	.language-name {
	  color: #586069;
	}
	
	.repo-forks {
	  color: #586069;
	}
	
	.repo-stars {
	  color: #586069;
	}
	
	.repo-updated {
	  color: #586069;
	}
	
	.language-color.html {
	  background-color: #e34c26;
	}
	
	.language-color.css {
	  background-color: #563d7c;
	}
	
	.language-color.javascript {
	  background-color: #f1e05a;
	}
	
	.language-color.python {
	  background-color: #3572a5;
	}
	
	.language-color.java {
	  background-color: #b07219;
	}
	
	.language-color.ruby {
	  background-color: #701516;
	}
	
	.language-color.php {
	  background-color: #4f5d95;
	}
	
	.language-color.c {
	  background-color: #555555;
	}
	
	.language-color.csharp {
	  background-color: #178600;
	}
	
	.language-color.cplusplus {
	  background-color: #f34b7d;
	}
	
	.language-color.assembly {
	  background-color: #6E4C13;
	}

	
</style>
