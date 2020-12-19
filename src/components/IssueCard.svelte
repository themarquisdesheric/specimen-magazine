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
  let headerWidth
</script>

<a href="/issues/{number}" rel="prefetch" class="issue-card w-full border rounded text-sm p-4 mb-4">
  <header
    bind:clientWidth={headerWidth}
    style="--headerWidth: {headerWidth}px"
    class="relative mb-4 text-white"
  >
    <h2 class="absolute flex justify-between font-bold text-xl">{title}</h2>
    <span class="absolute text-xl font-extralight">{date}</span>
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
  header {
    background-color: #000;
    height: var(--headerWidth);
  }

  h2 {
    bottom: .5em;
    left: .5em;
  }

  header span {
    top: .5em;
    right: .5em;
  }

  /* fluid font magic https://css-tricks.com/snippets/css/fluid-typography/ */
  @media (min-width: 320px) {
    h2,
    header span {
      font-size: calc(1.25rem + 6 * ((100vw - 320px) / 90));
    }
  }

  @media (min-width: 600px) {
    h2,
    header span {
      font-size: 1.25rem;
    }

    .issue-card {
      width: calc(50% - .5rem);
    }
  }
</style>
