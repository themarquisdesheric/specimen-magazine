<script lang="ts">
	export let segment: string
</script>

<nav class="flex justify-between">
	<div>
		<a
			aria-current={segment === undefined ? 'page' : undefined}
			href="."
			class="font-extrabold pl-0"
		>Specimen</a>
	</div>

	<ul class="flex font-extralight">
		<li>
			<a
				aria-current={segment === 'issues' ? 'page' : undefined}
				href="issues"
			>issues</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
					the blog data when we hover over the link or tap it on a touchscreen -->
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
			>about</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
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

	li:last-of-type a {
		padding-right: 0;
	}
</style>
