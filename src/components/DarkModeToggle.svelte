<script lang="ts">
	export let darkMode: boolean
	export let toggleDarkMode: (darkMode) => void
  export let classes = ''
</script>

{#if darkMode !== undefined}
  <button class="mr-4 px-3 {classes}" on:click={() => toggleDarkMode(darkMode)}>
    {darkMode ? '🌞' : '🌛'}
  </button>
{/if}
