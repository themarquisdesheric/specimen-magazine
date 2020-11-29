<script lang="ts">
  import { professors } from '../../content'
  import Tag from '../../components/Tag.svelte'
  let tags = []
  
  professors.forEach(professor => {
    tags = tags.concat(professor.tags)
  })

  const uniqueTags = [...new Set(tags)]
</script>

<svelte:head>
	<title>Tags | Specimen Magazine</title>
</svelte:head>

<div class="w-full">
  <h1 class="text-lg font-light pb-2">Tags</h1>
  
  <div class="flex flex-wrap">
    {#each uniqueTags as tag, index}
      <Tag
        {tag}
        lastOrOnlyTag={uniqueTags.length - 1 === index}
        className="mb-2"
      />
    {/each}
  </div>
</div>
