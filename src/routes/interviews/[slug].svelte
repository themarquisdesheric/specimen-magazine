<script context="module" lang="ts">
	import type { Professor } from '../../types'
  import { professorsKeyedBySlug } from '../../content'
	
  export const preload = async ({ params }) => ({
		professor: professorsKeyedBySlug[params.slug],
	})
</script>

<script lang="ts">
	export let professor: Professor

	const { name, interview: { interviewers, quote, date, html } } = professor
</script>

<svelte:head>
	<title>{name} | Specimen Magazine</title>
</svelte:head>

<div class="prose">
	<header>
		<div class="text-center">
			<h1 class="uppercase">{name}</h1>
			<p class="italic">interviewed by</p>
			<p class="uppercase text-xl font-extrabold">
				{interviewers[0].name}
			</p>

			{#if interviewers[1]}
				<p class="italic leading-6">and</p>
				<p class="uppercase text-xl font-extrabold">
					{interviewers[1].name}
				</p>
			{/if}
		</div>
		<p class="italic">{quote}</p>

		<div class="flex justify-center items-center">
			<div class="border-b w-full mr-3" />
			<p>{date}</p>
			<div class="border-b w-full ml-3" />
		</div>
	</header>
	<div>
		{@html html}
	</div>
</div>

<style>
	header div h1,
	header div p {
		margin: 0;
	}

	header div p.italic {
		font-family: gentium, serif;
	}

	header .uppercase,
	.prose {
		font-family: 'Open Sans';
	}

	.prose :global(.interviewer) {
		display: inline-block;
		margin: 1.25rem 0;
	}

	:global(.highlight) {
		font-weight: 700;
		border-top: 1px solid rgb(229, 231, 235);
		border-bottom: 1px solid rgb(229, 231, 235);
		padding: 1.25rem 0;
	}
</style>
