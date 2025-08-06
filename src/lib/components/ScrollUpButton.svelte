<script>
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<button id="scroll-up-button" onclick={handleClick} aria-label="Scroll to top button">
	<i id="scroll-up-icon" class="fa-solid fa-circle-arrow-up fa-xl"></i>
</button>

<style>
	button#scroll-up-button {
		background: transparent;
		position: fixed;
		cursor: pointer;
		right: 30px;
		bottom: 20px;
		border: none;
	}

	i#scroll-up-icon {
		color: var(--text-color);
	}
</style>
