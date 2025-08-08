<script lang="ts">
	import { categories, posts } from '$lib/stores/posts';
	import { formatDate, getPostDate } from '$lib/utils/post.util';
</script>

<section class="categories">
	<ul>
		{#each $categories as category}
			<li class="category-item">
				<a href="/category/{category}">{category}</a>
			</li>
		{/each}
	</ul>
</section>

<section class="posts">
	<ul>
		{#each $posts as post}
			<li class="post-item">
				<a href="/{post.slug}">
					<div class="post-time">
						<time datetime={getPostDate(post.slug).toISOString()}>
							{formatDate(getPostDate(post.slug))}
						</time>
					</div>
					<p class="post-title">{post.metadata.title}</p>
					<p>
						{post.metadata.summary || post.metadata.description || ''}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.categories ul {
		list-style: none;
	}
	.categories li {
		display: inline;
		margin: 0 0.5rem 1.5rem 0.5rem;
		text-decoration: underline;
	}

	.categories li a {
		font-weight: 700;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-decoration: none;
	}

	.posts ul {
		list-style: none;
	}

	.posts li.post-item {
		margin-bottom: 2.7rem;
	}

	.posts li a {
		text-decoration: none;
	}

	.posts li p.post-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		transition: color 0.3s;
	}

	.posts li p.post-title:hover {
		text-decoration: underline;
		color: var(--title-hover-color);
	}

	.posts li .post-time time {
		font-style: italic;
		white-space: nowrap;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--time-color);
	}
</style>
