<script context="module" lang="ts">
	import type { Issue } from '../../types'
  import { issues } from '../../content'
	import Tag from '../../components/Tag.svelte'

	export const preload = async () => ({ issues })
</script>

<script lang="ts">
	export let issues: Issue[]
</script>

<svelte:head>
	<title>Interviews | Specimen Magazine</title>
</svelte:head>

<div class="w-full">
	<h1 class="text-lg">Interviews</h1>
	<div class="prose">
		<div>
			{#each issues as issue, index}
				<ul>
					{#each issue.professors as professor}
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
				{#if issues.length - 1 !== index}
					<hr />
				{/if}
			{/each}
		</div>
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
