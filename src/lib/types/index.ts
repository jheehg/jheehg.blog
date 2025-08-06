export interface PostMeta {
	title: string;
	description?: string;
	summary?: string;
	tags?: string[];
	layout: string;
	comments?: boolean;
}

export interface Post {
	slug: string;
	metadata: PostMeta;
}
