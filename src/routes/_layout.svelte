<script lang="ts">
	import Nav from '../components/Nav.svelte'
	import instagram from '../../static/instagram.svg'

	export let segment: string
</script>

<Nav {segment} />
<main class="relative flex justify-center mx-auto my-0 p-8">
	<slot />
</main>
<footer class="text-center py-2 font-light">
	<div class="text-center mt-8">
		<span class="mr-4">
			<a href="https://twitter.com/specimen_mag?lang=en" target="_blank" rel="noopener noreferrer">
				<img src="twitter.svg" alt="twitter" />
			</a>
		</span>
		<span>
			<a href="https://www.instagram.com/specimenmagazine/" target="_blank" rel="noopener noreferrer">
				<img src="instagram.svg" alt="instagram" />
			</a>
		</span>
	</div>
	<small class="block my-2">Specimen Magazine © 2011 - 2015</small>
</footer>

<style>
	main {
		margin-top: 57px;
		/* 100vh - header - footer */
		min-height: calc(100vh - 56px - 110px);
		max-width: 56em;
		background-color: white;
		box-sizing: border-box;
	}

	span {
		display: inline-block;
		background: black;
		border-radius: 50%;
	}

	img {
		width: 2rem;
    padding: .6rem;
	}
</style>
