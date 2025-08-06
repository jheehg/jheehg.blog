<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let posts = data.posts;

	function getPostDate(slug: string) {
		const dateMatch = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
		if (dateMatch) {
			const [, year, month, day] = dateMatch;
			return new Date(`${year}-${month}-${day}`);
		}
		return new Date();
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit'
		});
	}
</script>

<section class="posts">
	<ul>
		{#each posts as post}
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
