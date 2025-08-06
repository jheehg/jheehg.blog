<script>
	import { page } from '$app/state';
	import { navigationLinks } from '$lib/constants/navigation';

	const currentPath = $derived(page.url.pathname);
</script>

<header>
	<nav>
		<ul>
			{#each navigationLinks as item}
				<li>
					<a
						href={item.url}
						class:active={currentPath === item.url || (currentPath === '/' && item.url === '/')}
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		flex-basis: 10rem;
		flex-grow: 1;
		position: fixed;
		height: 100%;
		z-index: 997;
		padding: 1rem;
	}

	header a {
		text-decoration: none;
	}

	header li {
		margin-bottom: 0.2rem;
		text-align: right;
		margin-right: 2rem;
	}

	header a.active {
		font-weight: bold;
		color: var(--active-color);
	}

	header ul {
		list-style: none;
	}

	@media screen and (max-width: 45rem) {
		header {
			flex-basis: 0;
			position: relative;
			height: auto;
		}

		header li {
			display: inline;
			margin-right: 1rem;
		}
	}
</style>
