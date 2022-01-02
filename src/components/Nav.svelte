<script lang="ts">
	import { onMount } from 'svelte'
	import NavLink from './NavLink.svelte'
	import DarkModeToggle from './DarkModeToggle.svelte'

	export let segment: string
	const linkNames: string[] = ['issues', 'interviews', 'about']
	let isMobileMenuOpen = false
	let darkMode

	onMount(() => {
		darkMode = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window?.matchMedia('(prefers-color-scheme: dark)')?.matches))
	})

	const toggleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen)

	const toggleDarkMode = (isDarkMode) => {
		if (isDarkMode) {
			document?.documentElement?.classList?.remove('dark')
			localStorage.theme = 'light'
			darkMode = false
		} else {
			document?.documentElement?.classList?.add('dark')
			localStorage.theme = 'dark'
			darkMode = true
		}
	}

	$: maxHeight = isMobileMenuOpen ? '175px' : '0px'
</script>

<nav class="fixed top-0 left-0 w-full z-10 bg-white dark:bg-gray-900 dark:text-white transition duration-300">
	<!-- mobile menu -->
	{#if isMobileMenuOpen}
		<div class="click-catcher" on:click={toggleMobileMenu} />
	{/if}
	<ul
		class="mobile-menu text-center overflow-hidden font-extralight"
		style="--maxHeight: {maxHeight};"
	>
		{#each linkNames as linkName}
			<NavLink {segment} {linkName} mobileMenu={true} {toggleMobileMenu} />
		{/each}
	</ul>

	<!-- logo -->
	<div class="max-width flex justify-between mx-auto">
		<div><a href="." class="logo font-extrabold pl-0">Specimen</a></div>

		<div class="flex">
			<DarkModeToggle {toggleDarkMode} {darkMode} classes="mobile-menu-dark-mode mr-2" />
			<button class="hamburger-menu flex items-center justify-center w-8 relative">
				<!-- hamburger menu svg from https://uxwing.com/hamburger-menu-icon/ -->
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="122.879px"
					height="103.609px"
					viewBox="0 0 122.879 103.609"
					fill={darkMode ? '#fff' : '#000'}
					class="w-5 h-5"
					on:click={toggleMobileMenu}
				>
					<g>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
						/>
					</g>
				</svg>
			</button>
		</div>

		<!-- regular menu -->
		<div class="regular-menu items-center">
			<DarkModeToggle {toggleDarkMode} {darkMode} classes="mr-4" />
			<ul class="flex font-extralight m-0 p-0">
				{#each linkNames as linkName}
					<NavLink {segment} {linkName} />
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
	nav {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
	}

	:global(.dark) nav {
		border-bottom: 1px solid #fff;
	}

	nav > div {
		width: calc(100% - 4rem);
	}

	div :global(a) {
		text-decoration: none;
		display: block;
	}

	.click-catcher {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
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

	.logo {
		padding: 1em 0.5em 1em 0;
	}

	.hamburger-menu {
		left: 0.45rem;
	}

	.regular-menu {
		display: none;
	}

	.regular-menu :global(a) {
		padding: 1em 0;
		margin: 0 0.5em;
	}

	.regular-menu :global(li):last-child :global(a) {
		margin-right: 0;
	}

	.regular-menu :global([aria-current]) {
		position: relative;
		display: inline-block;
		color: cornflowerblue;
	}

	.regular-menu :global([aria-current]::after) {
		position: absolute;
		content: '';
		width: calc(100% - 0.7em);
		height: 2px;
		background-color: cornflowerblue;
		display: block;
		bottom: -1px;
	}

	@media (min-width: 400px) {
		.hamburger-menu,
		.mobile-menu,
		:global(.mobile-menu-dark-mode) {
			display: none;
		}

		.regular-menu {
			display: flex;
		}
	}
</style>
