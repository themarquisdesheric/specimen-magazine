<script lang="ts">
  import { issues } from '../../content'
  import IssueCard from '../../components/IssueCard.svelte'
</script>

<svelte:head>
	<title>Issues | Specimen Magazine</title>
</svelte:head>

<div class="w-full">
  <h1 class="text-lg pb-2">Issues</h1>
  
  <div class="flex flex-wrap justify-between">
    {#each issues as issue}
      <IssueCard {issue} />
    {/each}
  </div>
</div>
