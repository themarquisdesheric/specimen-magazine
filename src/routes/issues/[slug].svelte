<script context="module" lang="ts">
  import type { Issue } from '../../types'
  import { issues } from '../../content'
  
  export async function preload({ params }) {
    console.log('params:', params)

    return { post: issues.firstIssue }
	}
</script>

<script lang="ts">
  export let post: Issue
  
  const { title, number, date } = post
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="flex justify-between font-extralight">
  <p class="text-xl">Issue №{number}</p>
  <p>{date}</p>
</div>
<h1 class="font-extrabold text-4xl">{title}</h1>
<div class="prose">
</div>
