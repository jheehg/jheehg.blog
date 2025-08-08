<script lang="ts">
	import { page } from '$app/state';
	import type { PostMeta } from '$lib/types';
	import { onMount } from 'svelte';

	interface Post {
		content: any;
		metadata: any;
	}

	let post: Post | null = null;

	onMount(async () => {
		const posts = import.meta.glob('/src/lib/posts/*.md');
		const postModule = (await posts[`/src/lib/posts/${page.params.slug}.md`]()) as {
			default: unknown;
			metadata: PostMeta;
		};

		post = {
			content: postModule.default,
			metadata: postModule.metadata
		};
	});
</script>

{#if post}
	<section class="post">
		<h1 class="title text-2xl font-semibold">{post.metadata.title}</h1>
		<svelte:component this={post.content} />
	</section>
{/if}

<style>
	section.post {
		padding: 16px;
	}

	.post .title {
		padding-bottom: 0.2rem;
		padding-right: 0rem;
		width: fit-content;
		border-bottom: 1.4px solid var(--title-bar-color);
		font-weight: 800;
		font-size: 2rem;
	}
</style>
