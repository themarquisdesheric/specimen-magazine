<script lang="ts">
  import { issues } from '../../content'

  const {
    number,
    title,
    date,
    interviews,
  } = issues.firstIssue
</script>

<svelte:head>
	<title>Issues</title>
</svelte:head>

<h1 class="text-lg font-light pb-2">Issues</h1>
<div class="issue-card border rounded text-sm font-light p-4">
  <header class="mb-2">
    <h2>
      <div class="flex justify-between">
        <p class="font-bold text-xl">Issue №{number}</p>
        <p>{date}</p>
      </div>
      <p class="leading-4 italic">{title}</p>
    </h2>
  </header>
  <hr class="pb-1" />
  {#each interviews as interview, index}
    <section class="py-1 flex justify-between">
      <p class="flex items-center">{interview.name}</p>
      <span class="text-xs font-extralight border rounded p-1 bg-gray-50">{interview.fields[0]}</span>
    </section>
    {#if index !== interviews.length - 1}
      <hr class="my-1" />
    {/if}
  {/each}
</div>

<style>
  .issue-card {
    max-width: 315px;
  }
</style>
