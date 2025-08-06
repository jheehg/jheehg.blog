<script lang="ts">
	export let title = '';
	export let date = '';
	export let tags: string[] = [];
</script>

<article class="post">
	<h1 class="title">{title}</h1>
	<div class="meta">
		<time>{date}</time>
		{#if tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
	<slot />
</article>
