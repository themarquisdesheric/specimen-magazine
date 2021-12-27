<script lang="ts">
  import type { Issue } from '../types';
  import Tag from './Tag.svelte'

  export let issue: Issue

  const {
    number,
    title,
    professors,
  } = issue
  const MAX_PROFESSOR_LENGTH = 5

  let headerWidth = 222
</script>
<a href="/issues/{number}" rel="prefetch" class="issue-card w-full border rounded text-sm p-4 mb-8 shadow-md">
  <header
    bind:clientWidth={headerWidth}
    style="--headerWidth: {headerWidth}px;"
    class="relative mb-4 text-white"
  >
    <img src="/issues/{number}.jpg" alt="{title} issue" />
    <h2
      class="absolute font-bold text-xl pl-3 pr-1"
      class:no-background={number === 3 || number === 6}
    >
      {title}
    </h2>
  </header>
  {#each professors as professor, index}
    {#if index === MAX_PROFESSOR_LENGTH && professors.length - 1 > MAX_PROFESSOR_LENGTH}
      <section class="py-1 flex justify-between items-center">  
        <p class="text-xs font-light">+ {professors.length - MAX_PROFESSOR_LENGTH} more</p>
      </section>
    {:else if index <= MAX_PROFESSOR_LENGTH}
      <section class="py-1 flex justify-between items-center">
        <p class="text-left mr-1">{professor.name}</p>
        <p class="text-right text-xs font-light">{professor.tags[0]}</p>
      </section>

      {#if index !== professors.length - 1}
        <hr class="my-1" />
      {/if}
    {/if}
  {/each}
</a>

<style>
  h2 {
    /* fluid font magic https://css-tricks.com/snippets/css/fluid-typography/ */
    font-size: calc(1.25rem + 6 * ((100vw - 320px) / 90));
    bottom: .5em;
    background: rgba(0, 0, 0, .6);
  }

  h2.no-background {
    background: none;
  }

  img {
    object-fit: cover;
    height: var(--headerWidth);
    width: 100%;
  }

  @media (min-width: 400px) {
    h2 {
      line-height: 2.25rem;
    }
  }

  @media (min-width: 500px) {
    h2 {
      line-height: 2.75rem;
    }
  }
  @media (min-width: 600px) {
    h2 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    .issue-card {
      width: calc(50% - .5rem);
    }
  }

  @media (min-width: 850px) {
    .issue-card {
      width: calc(33% - .5rem);
    }
  }
</style>
