<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { Toast } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<script defer data-domain="ebonyandivory.love" src="https://plausible.io/js/script.js"></script>
</svelte:head>

<Toast />
<div class="bg-gray-900">
	<header class="absolute inset-x-0 top-0 z-50">
		<Navigation />
	</header>
	<slot />
	<Footer />
</div>
