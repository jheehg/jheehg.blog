<script lang="ts">
	import ScrollUpButton from '$lib/components/ScrollUpButton.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import ThemeToggleButton from '$lib/components/ThemeToggleButton.svelte';
	import { initializeBlogData } from '$lib/stores/posts';
	import '$lib/styles/layout.scss';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(async () => {
		await initializeBlogData();
	});
</script>

<main>
	<SideBar />
	<ThemeToggleButton />
	{@render children()}
	<ScrollUpButton />
</main>
