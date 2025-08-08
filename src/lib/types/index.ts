export interface PostMeta {
	layout: string;
	title: string;
	description?: string;
	summary?: string;
	comments?: boolean;
	categories?: string[];
	tags?: string[];
}

export interface Post {
	slug: string;
	metadata: PostMeta;
}
