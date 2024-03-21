<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from './(components)/navbar.svelte';
	import Footer from './(components)/footer.svelte';
</script>

<ModeWatcher />
<div>
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
