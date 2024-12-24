<script lang="ts">
	import '../app.pcss';
	import Navbar from './(components)/navbar.svelte';
	import Footer from './(components)/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div>
	<Navbar />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
