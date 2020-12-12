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

<div class="prose max-width">
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
	<div class="flex flex-wrap justify-center my-5">
		{#each tags as tag, index}
			<Tag
				tag={tag}
				lastOrOnlyTag={tags.length - 1 === index}
				className="mb-2"
			/>
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
		font-family: gentium, serif;
	}

	header .uppercase,
	.prose {
		font-family: 'Open Sans';
	}

	.article-content :global(p) {
		font-weight: 400;
		color: #000;
	}

	.prose :global(.interviewer) {
		display: inline-block;
		margin: 1.25rem 0;
	}

	.prose :global(.highlight) {
		margin: 4rem auto;
		padding: 1.25rem;
		width: 75%;
		border: 4px solid #000;
		border-radius: 0;
		font-weight: 600;
		letter-spacing: .5px;
		text-align: center;
	}
</style>
