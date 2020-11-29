<script lang="ts">
	export let segment: string
  export let linkName: string
  export let mobileMenu = false
  export let toggleMobileMenu = () => {}
</script>

<!-- for the interviews link, we're using rel=prefetch so that Sapper prefetches
      the interviews data when we hover over the link or tap it on a touchscreen -->
<li on:click={() => mobileMenu && toggleMobileMenu()}>
  <a
    rel={segment === 'interviews' ? 'prefetch' : undefined}
    aria-current={segment === linkName ? 'page' : undefined}
    href={linkName}
    class:font-light={segment === linkName && mobileMenu}
  >
    {linkName}
  </a>
</li>
