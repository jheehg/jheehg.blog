<script>
	import { page } from '$app/state';
	import { navigationLinks } from '$lib/constants/navigation';

	const currentPath = $derived(page.url.pathname);
</script>

<header class="sidebar">
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
	header.sidebar {
		flex-basis: 10rem;
		flex-grow: 1;
		position: fixed;
		height: 100%;
		z-index: 997;
		padding: 1rem;
	}

	header.sidebar a {
		text-decoration: none;
	}

	header.sidebar li {
		margin-bottom: 0.2rem;
		text-align: right;
		margin-right: 2rem;
	}

	header.sidebar a.active {
		font-weight: bold;
		color: var(--active-color);
	}

	header.sidebar ul {
		list-style: none;
	}
</style>
