<script context="module" lang="ts">
	import type { Professor } from '../../types'
  import { professorsKeyedBySlug } from '../../content'
	
  export const preload = async ({ params }) => ({
		professor: professorsKeyedBySlug[params.slug],
	})
</script>

<script lang="ts">
	export let professor: Professor
</script>

<svelte:head>
	<title>{professor.name} | Specimen Magazine</title>
</svelte:head>

<div class="prose">
	<h1>{professor.name}</h1>
	<p class="italic">{professor.interview.quote}</p>
	<div>
		{@html professor.interview.html}
	</div>
</div>
