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
	<article>
		<h1>{post.metadata.title}</h1>
		<svelte:component this={post.content} />
	</article>
{/if}
