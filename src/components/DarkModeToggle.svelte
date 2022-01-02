<script lang="ts">
	export let darkMode: boolean
	export let toggleDarkMode: (darkMode) => void
  export let classes = ''

  $: mode = darkMode ? 'light' : 'dark'
</script>

{#if darkMode !== undefined}
  <button class="p-3 {classes}" on:click={() => toggleDarkMode(darkMode)}>
    <img src={`${mode}-mode.svg`} alt={`toggle ${mode} mode`} class="h-4" />
  </button>
{/if}


<style>
  button {
    outline: none;
  }
</style>