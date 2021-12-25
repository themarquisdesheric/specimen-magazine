<script lang="ts">
	import Nav from '../components/Nav.svelte'

	export let segment: string
</script>

<Nav {segment} />
<main class="max-width relative flex mx-auto my-0 py-8 dark:bg-gray-900 transition duration-300">
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
	<small class="block my-2 dark:text-white">Specimen Magazine © 2011 - 2015</small>
</footer>

<style>
	main {
		width: calc(100% - 4rem);
		margin-top: 57px;
		/* 100vh - header - footer */
		min-height: calc(100vh - 56px - 121px);
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

	:global(.prose *::selection) {
		background-color: rgba(17, 24, 39, 0.95);
	}

	:global(.dark .prose *::selection) {
		background-color: #fff;
		color: rgb(17, 24, 39);
	}

	:global(.prose *::selection),
	:global(.dark .prose h1),
  :global(.dark .prose h2),
  :global(.dark .prose p),
  :global(.dark .prose a:not(.tag)),
	:global(.dark h1),
  :global(.dark h2),
  :global(.dark p) {
    color: #fff;
  }
</style>
