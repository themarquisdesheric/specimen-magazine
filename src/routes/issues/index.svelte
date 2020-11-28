<script lang="ts">
  import { issues } from '../../content'

  const {
    number,
    title,
    date,
    professors,
  } = issues.firstIssue
</script>

<svelte:head>
	<title>Issues | Specimen Magazine</title>
</svelte:head>

<h1 class="text-lg font-light pb-2">Issues</h1>

<a href="/issues/{number}" rel="prefetch">
  <div class="issue-card border rounded text-sm font-light p-4">
    <header class="mb-2">
      <h2 class="flex justify-between text-xl">
        <span class="font-bold">{title}</span>
        <span class="font-extralight">{date}</span>
      </h2>
      <p class="leading-4 italic">Issue №{number}</p>
    </header>
    <hr class="pb-1" />
    {#each professors as professor, index}
      <section class="py-1 flex justify-between">
        <a href="/interviews/{professor.slug}" rel="prefetch">
          <p class="flex items-center">{professor.name}</p>
        </a>
        <span class="text-xs font-extralight border rounded p-1 bg-gray-50">{professor.fields[0]}</span>
      </section>
      {#if index !== professors.length - 1}
        <hr class="my-1" />
      {/if}
    {/each}
  </div>
</a>

<style>
  .issue-card {
    max-width: 315px;
  }
</style>
