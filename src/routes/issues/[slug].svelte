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
  
  const { title, number, date, intro } = issue
</script>

<svelte:head>
	<title>Issue №{number} | Specimen Magazine</title>
</svelte:head>

<div class="prose w-full font-light">
  <h1 class="pb-2">{title}</h1>
  <div class="flex justify-between text-lg font-extralight">
    <span>Issue №{number}</span>
    <span>{date}</span>
  </div>

  <p>{intro}</p>

  <h2>Reading List</h2>
  <h2>Interviews</h2>
</div>

<style>
  h1 {
    margin-bottom: 0;
  }
</style>
