<script lang="ts">
	import NavLink from './NavLink.svelte'

	export let segment: string
	const linkNames: string[] = ['issues', 'interviews', 'about']
	let isMobileMenuOpen = false
	
	const toggleMobileMenu = () =>
		isMobileMenuOpen = !isMobileMenuOpen
	
	$: maxHeight = isMobileMenuOpen ? '175px' : '0px'
</script>

<!-- mobile menu -->
<ul
	class="mobile-menu text-center overflow-hidden font-extralight"
	style="--maxHeight: {maxHeight};"
>
	{#each linkNames as linkName}
		<NavLink {segment} {linkName} mobileMenu={true} {toggleMobileMenu} />
	{/each}
</ul>

<nav class="border-b">
	<div class="flex justify-between px-8">
		<div>
			<a
				href="."
				class="font-extrabold pl-0"
			>Specimen</a>
		</div>
	
		<button class="hamburger-menu flex items-center justify-center w-8 relative">
			<img src="menu.png" alt="hamburger menu" class="py-3 w-5" on:click={toggleMobileMenu}>
		</button>

		<!-- regular menu -->
		<ul class="regular-menu flex font-extralight m-0 p-0">
			{#each linkNames as linkName}
				<NavLink {segment} {linkName} />
			{/each}
		</ul>
	</div>
</nav>

<style>
	.hamburger-menu {
    left: .45rem;
	}

	nav :global([aria-current]) {
		position: relative;
		display: inline-block;
	}

	nav :global([aria-current]::after) {
		position: absolute;
		content: '';
		width: calc(100% - .5em);
		height: 2px;
		background-color: rgb(0, 0, 0);
		display: block;
		bottom: -1px;
	}

	nav :global(a) {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	div :global(a) {
		padding-left: 0;
	}

	.mobile-menu {
		transition: max-height 0.3s ease-out;
		background: rgb(17, 24, 39);
		max-height: var(--maxHeight);
		color: #fff;
	}

	.mobile-menu :global(li) {
		margin: 1rem 0;
	}

	.regular-menu {
		display: none;
	}

	@media (min-width: 400px) {
		.hamburger-menu,
		.mobile-menu {
			display: none;
		}

		.regular-menu {
			display: flex;
		}
	}
</style>
