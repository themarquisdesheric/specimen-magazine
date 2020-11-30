<script context="module" lang="ts">
  import type { Issue } from '../../types'
  import { issues } from '../../content'
  import IssueCard from '../../components/IssueCard.svelte'

  export const preload = async ({ params }) => {
    console.log('params:', params)

    return { issue: issues.firstIssue }
	}
</script>

<script lang="ts">
  export let issue: Issue
  
  const { number } = issue
</script>

<svelte:head>
	<title>Issue №{number} | Specimen Magazine</title>
</svelte:head>

<div class="w-full">
  <h1 class="text-lg font-light pb-2">Issue №{number}</h1>
  
  <IssueCard hideIssueNumber={true} />

  Reading List
</div>
