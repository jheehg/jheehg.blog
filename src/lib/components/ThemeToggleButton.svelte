<script>
	let themeType = $state('light');

	$effect(() => {
		themeType = localStorage.getItem('themeType') || 'light';
		document.documentElement.className = themeType;
	});

	const changeTheme = () => {
		if (themeType !== 'dark') {
			themeType = 'dark';
			document.documentElement.className = 'dark';
			localStorage.setItem('themeType', 'dark');
		} else {
			themeType = 'light';
			document.documentElement.className = 'light';
			localStorage.setItem('themeType', 'light');
		}
	};
</script>

<button id="theme-toggle-button" onclick={changeTheme} aria-label="Toggle theme button">
	<i id="themeIcon" class="fa-solid {themeType === 'dark' ? 'fa-toggle-off' : 'fa-toggle-on'} fa-xl"
	></i>
</button>

<style>
	button#theme-toggle-button {
		position: absolute;
		right: 30px;
		z-index: 1000;
		all: unset;
		cursor: pointer;
	}

	button:focus-visible {
		outline: 2px solid currentColor;
	}

	@media screen and (max-width: 45rem) {
		button#theme-toggle-button {
			right: 20px;
		}
	}
</style>
