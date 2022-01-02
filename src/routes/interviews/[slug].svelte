<script context="module" lang="ts">
	import type { Professor } from '../../types'
	import { professorsKeyedBySlug } from '../../content'
	import Tag from '../../components/Tag.svelte'
	
  export const preload = async ({ params }) => ({
		professor: professorsKeyedBySlug[params.slug],
	})
</script>

<script lang="ts">
	export let professor: Professor

	const { name, tags, interview: { interviewers, quote, date, html } } = professor
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
		<p class="italic">{@html quote}</p>
		<div class="flex justify-center items-center">
			<div class="border-b w-full mr-3" />
			<p>{date}</p>
			<div class="border-b w-full ml-3" />
		</div>
	</header>
	<div class="flex flex-wrap justify-center my-5">
		{#each tags as tag}
			<Tag {tag} className="mb-2" />
		{/each}
	</div>
	<div class="article-content">
		{@html html}
	</div>
</div>

<style>
	header div h1,
	header div p {
		margin: 0;
	}

	header div p {
		text-align: center;
	}

	header div p.italic {
		font-family: serif;
	}

	header .uppercase,
	.prose {
		font-family: 'Open Sans';
	}

	.article-content :global(p) {
		font-weight: 400;
		color: #000;
	}
	
	:global(.dark .article-content p) {
		color: #fff;
	}

	.prose :global(.interviewer) {
		display: inline-block;
		margin: 1.25rem 0;
	}

	.prose :global(.highlight) {
		margin: 4rem auto;
		padding: 1.5rem;
		width: 75%;
		border: .75rem solid #000;
		border-radius: 0;
		font-size: 1rem;
		font-weight: 600;
		font-style: italic;
		letter-spacing: .25px;
		text-align: center;
		text-transform: uppercase;
	}

	:global(.dark .prose .highlight) {
		border-color: #fff;
	}

	@media (min-width: 600px) {
		.prose :global(.highlight) {
			padding: 2rem;
			font-size: 1.25rem;
		}
	}
</style>
