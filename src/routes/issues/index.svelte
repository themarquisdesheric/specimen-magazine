<script lang="ts">
  import { issues } from '../../content'
  import Tag from '../../components/Tag.svelte'

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

<div class="w-full">
  <h1 class="text-lg font-light pb-2">Issues</h1>
  
  <div class="flex flex-wrap">
    {#each [1,2,3,4,5] as _}
      <a href="/issues/{number}" rel="prefetch" class="issue-card">
        <div class="w-full border rounded text-sm font-light p-4">
          <header class="mb-2">
            <h2 class="flex justify-between text-xl">
              <span class="font-bold">{title}</span>
              <span class="font-extralight">{date}</span>
            </h2>
            <p class="leading-4">Issue №{number}</p>
          </header>
          <hr class="pb-1" />
          {#each professors as professor, index}
            <section class="py-1 flex justify-between items-center">
              <a href="/interviews/{professor.slug}" rel="prefetch">
                <p>{professor.name}</p>
              </a>
              <Tag tag={professor.tags[0]} />
            </section>
            {#if index !== professors.length - 1}
              <hr class="my-1" />
            {/if}
          {/each}
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .issue-card div {
    max-width: 315px;
    margin: 0 3rem 1rem 0;
  }

  .issue-card header p,
  .issue-card section {
    font-family: 'Open Sans', sans-serif;
  }
</style>
