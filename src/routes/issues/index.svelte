<script lang="ts">
  import IssueCard from '../../components/IssueCard.svelte'
</script>

<svelte:head>
	<title>Issues | Specimen Magazine</title>
</svelte:head>

<div class="max-width w-full">
  <h1 class="text-lg font-light pb-2">Issues</h1>
  
  <div class="flex flex-wrap">
    {#each [1,2,3,4,5] as _}
      <IssueCard />
    {/each}
  </div>
</div>
