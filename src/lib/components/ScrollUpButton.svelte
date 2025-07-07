<script>
	const scrollUpButton = document.querySelector('#scroll-up-button');

	scrollUpButton?.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div id="scroll-up-button">
	<i id="scroll-up-icon" class="fa-solid fa-circle-arrow-up fa-xl"></i>
</div>
