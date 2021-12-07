<script context="module" lang="ts">
  import type { Issue } from '../../types'
  import { issues } from '../../content'
  import Tag from '../../components/Tag.svelte'

  export const preload = async ({ params }) => ({
    issue: issues[params.slug - 1]
  })
</script>

<script lang="ts">
  export let issue: Issue
  
  const { title, number, date, intro, professors } = issue
  const readingList = issue?.readingList
</script>

<svelte:head>
	<title>Issue №{number} | Specimen Magazine</title>
</svelte:head>

<div class="prose w-full">
  <h1 class="pb-2">{title}</h1>
  <div class="flex justify-between text-lg font-light">
    <span>Issue №{number}</span>
    <span>{date}</span>
  </div>

  <p>{@html intro}</p>

  <div class="interviews mt-12 p-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
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
  </div>

  {#if readingList}
    <h2 class="pb-2">Reading List</h2>
    <p class="text-sm text-gray-700">Texts discussed in this issue</p>
    <div class="flex flex-wrap justify-between">
      {#each readingList as book}
        <section class="mb-4 sm:mb-6">
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
  {/if}
</div>

<style>
  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 0;
  }

  .interviews h2,
  .interviews li a:not(.tag) {
    margin-top: 0;
    color: #fff;
  }

  .interviews ul {
    margin-bottom: 0;
  }

  section p {
    text-align: left;
    margin: 0;
    min-width: 250px;
  }

  section p:last-of-type {
    margin-top: .25rem;
  }
  
  .prose a section p {
    text-decoration: none;
  }

  .prose :global(hr) {
    width: 3rem;
    margin: 3em auto;
    border-top-width: 4px;
  }

	li {
		font-family: 'Open Sans', sans-serif;
	}

	li a {
		margin: 0;
  }
  
  @media (min-width: 640px) {
    section {
      width: calc(50% - 1rem);
    }
  }
</style>
