<script context="module" lang="ts">
  import type { Issue } from '../../types'
  import { issues } from '../../content'
  import Tag from '../../components/Tag.svelte'

  export const preload = async ({ params }) => ({
    issue: issues.firstIssue
  })
</script>

<script lang="ts">
  export let issue: Issue
  
  const { title, number, date, intro, readingList, professors } = issue
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

  <p>{@html intro}</p>

  <h2>Interviews</h2>
  <div>
    <ul>
      {#each professors as professor}
        <li class="flex justify-between">
          <a rel="prefetch" href="/interviews/{professor.slug}">{professor.name}</a>
          <Tag tag={professor.tags[0]} />
        </li>
      {/each}
    </ul>
  </div>

  <h2 class="pb-2">Reading List</h2>
  <p class="font-extralight">Books discussed in this issue</p>
  <div class="flex flex-wrap justify-between">
    {#each readingList as book}
      <section class="mb-2 sm:mb-4">
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          <p class="font-sans">{book.title}</p>
        </a>
        {#if book.subtitle}
          <p class="text-sm italic">{book.subtitle}</p>
        {/if}
        <p class="text-sm">{book.author}</p>
      </section>
    {/each}
  </div>
</div>

<style>
  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 0;
  }

  section p {
    text-align: left;
    margin: 0;
  }

  section p:last-of-type {
    margin-top: .25rem;
  }
  
  .prose a section p {
    text-decoration: none;
  }

  hr {
    margin: .5rem 0;
  }

	li {
		font-family: 'Open Sans', sans-serif;
	}

	li a {
		margin: 0;
	}
</style>
