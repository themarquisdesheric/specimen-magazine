<script lang="ts">
  import { issues } from '../content'
  import Tag from './Tag.svelte'

  export let hideIssueNumber = false

  const {
    number,
    title,
    date,
    professors,
  } = issues.firstIssue
</script>

<a href="/issues/{number}" rel="prefetch" class="issue-card">
  <div class="w-full border rounded text-sm font-light p-4">
    <header class="mb-4">
      <h2 class="flex justify-between text-xl">
        <span class="font-bold">{title}</span>
        <span class="font-extralight">{date}</span>
      </h2>
      <p class="leading-4" class:hidden={hideIssueNumber}>Issue №{number}</p>
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

<style>
  .issue-card div {
    max-width: 315px;
    margin: 0 3rem 1rem 0;
  }
</style>
