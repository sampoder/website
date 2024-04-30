<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<div on:click={() => document.confetti.addConfetti({emojis: ['🌈', '🏳️‍🌈', '✨']})} class="pointer">
	<div style="height: 8px; background: #ec3750;"></div>
	<div style="height: 8px; background: #ff8c37;"></div>
	<div style="height: 8px; background: #f1c40f;"></div>
	<div style="height: 8px; background: #33d6a6;"></div>
	<div style="height: 8px; background: #338eda;"></div>
	<div style="height: 8px; background: #a633d6;"></div>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
