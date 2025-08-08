export function getPostDate(slug: string) {
	const dateMatch = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
	if (dateMatch) {
		const [, year, month, day] = dateMatch;
		return new Date(`${year}-${month}-${day}`);
	}
	return new Date();
}

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit'
	});
}
