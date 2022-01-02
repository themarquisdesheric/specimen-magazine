<script lang="ts">
	export let status: number
	export let error: Error

	const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
	<title>{status} | Specimen Magazine</title>
</svelte:head>

<div class="w-full flex flex-col justify-center text-center">
	{#if status === 404}
		<div class="mx-auto flex flex-col justify-center">
			<p class="mx-auto my-0 font-serif italic">Ceci n'est pas une</p>
			<h1 class="mx-auto my-0 font-bold">{status}</h1>
			<p class="mx-auto my-0 font-serif italic">page</p>
		</div>
	{:else}
		<p>{error.message}</p>
	{/if}
</div>
{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<style>
	h1 {
		font-size: 5rem;
	}

	div div {
		width: 300px;
    height: 300px;
    border: 0.75rem solid #000;
	}

	@media (min-width: 600px) {
		h1 {
			font-size: 6rem;
		}

		p {
			font-size: 1.125rem;
		}
	}
</style>
