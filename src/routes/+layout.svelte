<script lang="ts">
	import ScrollUpButton from '$lib/components/ScrollUpButton.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import ThemeToggleButton from '$lib/components/ThemeToggleButton.svelte';
	import '$lib/styles/layout.scss';
	import '../app.css';

	let { children } = $props();
</script>

<SideBar />
<ThemeToggleButton />
{@render children()}
<ScrollUpButton />
