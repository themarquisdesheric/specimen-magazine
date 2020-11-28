<script context="module" lang="ts">
	import type { Professor } from '../../types';
	import { professors } from '../../content'

	export const preload = async () => ({ professors })
</script>

<script lang="ts">
	export let professors: Professor[]
</script>

<svelte:head>
	<title>Interviews | Specimen Magazine</title>
</svelte:head>

<div class="prose">
	<h1>Interviews</h1>
	<ul>
		{#each professors as professors}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel="prefetch" href="/interviews/{professors.slug}">{professors.name}</a></li>
		{/each}
	</ul>
</div>

<style>
	li {
		font-family: 'Open Sans', sans-serif;
	}
</style>
