// import type { Post } from '$lib/types';

// function getCategories(posts: Post[]) {
// 	const categories = posts.map((post) => post.metadata.categories);
// 	return [...new Set(categories.flat().filter(Boolean))];
// }

// export async function load({ fetch }) {
// 	const response = await fetch('api/posts');
// 	const posts: Post[] = await response.json();
// 	const categories = getCategories(posts);
// 	return { posts, categories };
// }

// export const prerender = true;
