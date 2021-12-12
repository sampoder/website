<script>
	import Hls from 'hls.js'
	import { onMount } from 'svelte';
	export let mux;

	let video;
	let src = `https://stream.mux.com/${mux}.m3u8`

	onMount(() => {
		if (!video) return;

		video.controls = true;
		let hls;

		if (video.canPlayType('application/vnd.apple.mpegurl')) {
			// This will run in safari, where HLS is supported natively
			video.src = src;
		} else if (Hls.isSupported()) {
			// This will run in all other modern browsers
			hls = new Hls();
			hls.loadSource(src);
			hls.attachMedia(video);
		} else {
			console.error(
				'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
			);
		}

		return () => {
			if (hls) {
				hls.destroy();
			}
		};
	});
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	bind:this={video}
	poster={`https://image.mux.com/${mux}/thumbnail.jpg?width=512&fit_mode=pad&time=0`}
	controls
	playsInline
	loop
	class="post-image"
	preload="metadata"
/>

<style>
	
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

</style>
