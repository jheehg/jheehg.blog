<script lang="ts">
	import { posts } from '$lib/stores/posts';
	import type { Post } from '$lib/types';
	import { formatDate, getPostDate } from '$lib/utils/post.util';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();
	let category = params.slug;
	let filteredPosts: Post[] = $posts.filter((post) => post.metadata.categories?.includes(category));
</script>

<section class="category-list">
	<h2 class="category text-2xl font-semibold">#{category} ({filteredPosts.length ?? 0})</h2>
	<ul>
		{#each filteredPosts as post}
			<li class="category-item">
				<a href="/{post.slug}">
					<div class="category-time">
						<time datetime={getPostDate(post.slug).toISOString()}>
							{formatDate(getPostDate(post.slug))}
						</time>
					</div>
					<p class="category-title">{post.metadata.title}</p>
					<p>
						{post.metadata.summary || post.metadata.description || ''}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.category-list ul {
		list-style: none;
	}

	.category-list li.category-item {
		margin-bottom: 2.7rem;
	}

	.category-list li a {
		text-decoration: none;
	}

	.category-list li p.category-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		transition: color 0.3s;

		&:hover {
			text-decoration: underline;
			color: var(--title-hover-color);
		}
	}

	.category-list li .category-time time {
		font-style: italic;
		white-space: nowrap;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--time-color);
	}

	.category-list .category {
		color: var(--active-color);
	}
</style>
