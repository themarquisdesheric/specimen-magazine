<script context="module" lang="ts">
	import type { Professor } from '../../types';
	import { professors } from '../../content'
	import Tag from '../../components/Tag.svelte'

	export const preload = async () => ({ professors })
</script>

<script lang="ts">
	export let professors: Professor[]
</script>

<svelte:head>
	<title>Interviews | Specimen Magazine</title>
</svelte:head>

<div class="max-width w-full">
	<h1 class="text-lg font-light">Interviews</h1>
	<div class="prose">
		<ul>
			{#each professors as professor}
				<!-- we're using the non-standard `rel=prefetch` attribute to
						tell Sapper to load the data for the page as soon as
						the user hovers over the link or taps it, instead of
						waiting for the 'click' event -->
				<li class="flex justify-between">
					<a rel="prefetch" href="/interviews/{professor.slug}">{professor.name}</a>
					<Tag tag={professor.tags[0]} />
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	li {
		font-family: 'Open Sans', sans-serif;
	}

	li a {
		margin: 0;
	}
</style>
