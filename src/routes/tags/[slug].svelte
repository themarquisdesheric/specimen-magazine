<script context="module" lang="ts">
  import type { Professor } from '../../types'
  import { professors } from '../../content'

  export const preload = async ({ params }) => {
    const matchingProfessors = professors.filter(professor => professor.tags.includes(params.slug))

    return { 
      matchingProfessors,
      slug: params.slug,
    }
	}
</script>

<script lang="ts">
  export let matchingProfessors: Professor[], slug: string
</script>

<svelte:head>
	<title>Tags | Specimen Magazine</title>
</svelte:head>

<div class="max-width w-full">
<h1 class="text-lg font-medium">#{slug}</h1>
  <div class="prose">
    <ul>
      {#each matchingProfessors as professor}
        <li>
          <a href="/interviews/{professor.slug}" rel="prefetch">
            {professor.name}
          </a>
        </li>
      {/each}
    </ul>
    <a href="/tags" rel="prefetch" class="text-sm">All Tags</a>
  </div>
</div>

<style>
  a {
		font-family: 'Open Sans', sans-serif;
	}
</style>
