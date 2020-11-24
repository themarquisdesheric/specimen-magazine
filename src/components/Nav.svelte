<script lang="ts">
	export let segment: string
	let isMobileMenuOpen = false
	
	$: maxHeight = isMobileMenuOpen ? '175px' : '0px'

	const toggleMobileMenu = (): boolean =>
		isMobileMenuOpen = !isMobileMenuOpen
</script>

<ul
	class="mobile-menu text-center overflow-hidden"
	style="--maxHeight: {maxHeight};"
>
	<li>issues</li>
	<li>interviews</li>
	<li>about</li>
</ul>
<nav>
	<div class="flex justify-between px-8">
		<div>
			<a
				aria-current={segment === undefined ? 'page' : undefined}
				href="."
				class="font-extrabold pl-0"
			>Specimen</a>
		</div>
	
		<button class="hamburger-menu flex items-center justify-center w-8 relative">
			<img src="menu.png" alt="hamburger menu" class="py-3 w-5" on:click={toggleMobileMenu}>
		</button>

		<ul class="regular-menu flex font-extralight m-0 p-0">
			<li>
				<a
					aria-current={segment === 'issues' ? 'page' : undefined}
					href="issues"
				>issues</a>
			</li>
	
			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
						the blog data when we hover over the link or tap it on a touchscreen ---->
			<li>
				<a
					rel="prefetch"
					aria-current={segment === 'interviews' ? 'page' : undefined}
					href="interviews"
				>interviews</a>
			</li>
			<li>
				<a
					aria-current={segment === 'about' ? 'page' : undefined}
					href="about"
					class="pr-0"
				>about</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		border-bottom: 1px solid #111827;
	}

	.hamburger-menu {
    left: .45rem;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(0, 0, 0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	div a {
		padding-left: 0;
	}

	.mobile-menu {
		transition: max-height 0.3s ease-out;
		border-bottom: 1px solid #111827;
		max-height: var(--maxHeight);
	}

	.mobile-menu li {
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
