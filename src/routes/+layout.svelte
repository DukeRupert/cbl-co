<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from './(components)/navbar.svelte';
	import Footer from './(components)/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ModeWatcher />
<div>
	<Navbar />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
