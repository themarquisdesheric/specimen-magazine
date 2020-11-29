<script lang="ts">
  export let tag = ''
  export let className = ''
  export let lastOrOnlyTag = true
</script>

<a
  href="/tags/{tag}"
  rel="prefetch"
  class="text-xs border rounded p-1 bg-gray-50 {className}"
  class:mr-2={!lastOrOnlyTag}
>
  {tag}
</a>

<style>
  :global(.prose) a,
  a {
    text-decoration: none;
    font-weight: 200;
    white-space: nowrap;
  }
</style>
