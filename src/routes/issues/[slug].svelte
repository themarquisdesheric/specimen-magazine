<script context="module" lang="ts">
  import type { Issue } from '../../types'
  import { issues } from '../../content'
  
  export const preload = async ({ params }) => {
    console.log('params:', params)

    return { issue: issues.firstIssue }
	}
</script>

<script lang="ts">
  export let issue: Issue
  
  const { title, number, date, professors } = issue
</script>

<svelte:head>
	<title>Issue №{number} | Specimen Magazine</title>
</svelte:head>

<header class="mb-2">
  <h1 class="flex justify-between text-2xl">
    <span class="font-extrabold">{title}</span>
    <span class="font-extralight">{date}</span>
  </h1>
  <p class="leading-4 italic">Issue №{number}</p>
  <hr class="my-2" />
</header>

<div class="prose">
  <ul>
    {#each professors as professor}
      <li>{professor.name}</li>
    {/each}
  </ul>
</div>
