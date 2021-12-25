<script context="module" lang="ts">
	import { contributors } from '../content'
</script>

<svelte:head>
	<title>About | Specimen Magazine</title>
</svelte:head>

<div class="w-full">
	<h1>About Specimen Magazine</h1>
	<div class="prose">
		<div class="text-sm">
			<p>This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now. This is where the 'about Specimen' content will be. There's not much here now.</p>
		</div>
		<h2>Contributors</h2>
		<ul>
			{#each contributors as { name, url }}
				{#if url}
					<li>
						<a href={url} target="_blank" rel="noopener noreferrer">{name}</a>	
					</li>
				{:else}
					<li>{name}</li>
				{/if}
			{/each}
		</ul>
		<h2>Contact</h2>
		<span>specimenmagazine</span><span>@</span><span>gmail.com</span>
	</div>

</div>

<style>
	h1,
	h2 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 400;
	}
	p {
		margin-top: .5rem;
	}

	:global(.dark) li,
	:global(.dark) span {
		color: #fff;
	}
</style>
