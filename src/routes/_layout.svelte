<script lang="ts">
	import Nav from '../components/Nav.svelte'

	export let segment: string
</script>

<Nav {segment} />

<main class="relative flex justify-center mx-auto my-0 p-8">
	<slot />
</main>

<style>
	main {
		margin-top: 57px;
		max-width: 56em;
		background-color: white;
		box-sizing: border-box;
	}
</style>
