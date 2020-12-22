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
  const colors = ['rgb(23, 19, 100)', 'rgb(236, 175, 148)', 'rgb(251, 112, 125)', 'rgb(193, 14, 27)', 'rgb(206, 203, 244)', 'rgb(48, 121, 80)', 'rgb(240, 113, 21)', 'rgb(225, 172, 87)', 'rgb(34, 85, 77)']
  let headerWidth
</script>

<a href="/issues/{number}" rel="prefetch" class="issue-card w-full border rounded text-sm p-4 mb-4">
  <header
    bind:clientWidth={headerWidth}
    style="--headerWidth: {headerWidth}px; background-color: {colors[number - 1]}"
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
        <p class="text-left mr-1">{professor.name}</p>
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
    height: var(--headerWidth);
  }

  h2,
  header span {
    /* fluid font magic https://css-tricks.com/snippets/css/fluid-typography/ */
    font-size: calc(1.25rem + 6 * ((100vw - 320px) / 90));
  }

  h2 {
    bottom: .5em;
    left: .5em;
  }

  header span {
    top: .5em;
    right: .5em;
  }
  @media (min-width: 600px) {
    h2,
    header span {
      font-size: 1.25rem;
    }

    h2 {
      left: .75em;
    }

    header span {
      right: .75em;
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
