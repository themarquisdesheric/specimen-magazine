<script lang="ts">
	import Nav from '../components/Nav.svelte'

	export let segment: string
</script>

<Nav {segment} />
<main class="relative flex justify-center mx-auto my-0 p-8">
	<slot />
</main>
<footer class="text-center py-2 font-extralight">
	<small>Specimen Magazine © 2011 - 2015</small>
</footer>

<style>
	main {
		margin-top: 57px;
		/* 100vh - header - footer */
		min-height: calc(100vh - 56px - 40px);
		max-width: 56em;
		background-color: white;
		box-sizing: border-box;
	}
</style>
