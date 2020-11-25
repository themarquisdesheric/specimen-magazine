<script lang="ts">
	export let segment: string
  export let linkName: string
  export let mobileMenu: boolean = false
</script>

<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen -->
<li>
  <a
    class:font-light={segment === linkName && mobileMenu}
    rel={segment === 'interviews' ? 'prefetch' : undefined}
    aria-current={segment === linkName ? 'page' : undefined}
    href={linkName}
  >{linkName}</a>
</li>
