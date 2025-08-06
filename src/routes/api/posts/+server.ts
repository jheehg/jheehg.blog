import type { Post, PostMeta } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts: Post[] = [];

	const postFiles = import.meta.glob('/src/lib/posts/*.md');

	for (const [path, resolver] of Object.entries(postFiles)) {
		try {
			const postModule = (await resolver()) as {
				default: unknown;
				metadata: PostMeta;
			};

			const slug = path.split('/').pop()?.replace('.md', '') || '';

			posts.push({
				slug,
				metadata: postModule.metadata
			});
		} catch (error) {
			console.warn(`Failed to load ${path}:`, error);
		}
	}

	posts = posts.sort((a, b) => b.slug.localeCompare(a.slug));
	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
