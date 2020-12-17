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

  const MAX_PROFESSOR_LENGTH = 5
</script>

<a href="/issues/{number}" rel="prefetch" class="issue-card w-full border rounded text-sm p-4 mb-4">
  <header class="mb-3">
    <h2 class="flex justify-between text-xl">
      <span class="font-bold">{title}</span>
      <span class="font-extralight">{date}</span>
    </h2>
  </header>
  {#each professors as professor, index}
    {#if index === MAX_PROFESSOR_LENGTH && professors.length - 1 > MAX_PROFESSOR_LENGTH}
      <section class="py-1 flex justify-between items-center">  
        <p class="font-light">+{professors.length - MAX_PROFESSOR_LENGTH} more</p>
      </section>
    {:else if index <= MAX_PROFESSOR_LENGTH}
      <section class="py-1 flex justify-between items-center">
        <p class="text-left">{professor.name}</p>
        <Tag tag={professor.tags[0]} />
      </section>

      {#if index !== professors.length - 1}
        <hr class="my-1" />
      {/if}
    {/if}
  {/each}
</a>

<style>
  @media (min-width: 600px) {
    .issue-card {
      width: calc(50% - .5rem);
    }
  }
</style>
