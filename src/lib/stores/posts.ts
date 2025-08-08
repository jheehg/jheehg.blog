import type { Post, PostMeta } from '$lib/types';
import { writable } from 'svelte/store';

export const posts = writable<Post[]>([]);
export const categories = writable<string[]>([]);

async function getPosts() {
	let allPosts: Post[] = [];

	const postFiles = import.meta.glob('/src/lib/posts/*.md');

	for (const [path, resolver] of Object.entries(postFiles)) {
		try {
			const postModule = (await resolver()) as {
				default: unknown;
				metadata: PostMeta;
			};

			const slug = path.split('/').pop()?.replace('.md', '') || '';

			allPosts.push({
				slug,
				metadata: postModule.metadata
			});
		} catch (error) {
			console.warn(`Failed to load ${path}:`, error);
		}
	}

	allPosts = allPosts.sort((a, b) => b.slug.localeCompare(a.slug));
	return allPosts;
}

function getCategories(posts: Post[]) {
	const allCategories = posts
		.map((post) => post.metadata.categories || [])
		.flat()
		.filter(Boolean);

	return [...new Set(allCategories)];
}

export async function initializeBlogData() {
	const allPosts = await getPosts();
	const allCategories = getCategories(allPosts);

	posts.set(allPosts);
	categories.set(allCategories);
}
