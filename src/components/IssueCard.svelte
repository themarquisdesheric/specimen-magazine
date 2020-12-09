<script lang="ts">
  import type { Issue } from '../types';
  import Tag from './Tag.svelte'

  export let issue: Issue

  const {
    number,
    title,
    date,
    professors,
  } = issue
</script>

<a href="/issues/{number}" rel="prefetch" class="issue-card w-full">
  <div class="w-full border rounded text-sm font-light p-4">
    <header class="mb-3">
      <h2 class="flex justify-between text-xl">
        <span class="font-bold">{title}</span>
        <span class="font-extralight">{date}</span>
      </h2>
    </header>
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

<style>
  .issue-card div {
    margin: 0 0 1rem;
  }

  @media (min-width: 600px) {
    .issue-card {
      width: calc(50% - .5rem);
    }
  }
</style>
