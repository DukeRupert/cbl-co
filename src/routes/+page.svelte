<script lang="ts">
	import Cta from './Cta.svelte';
	import Lessons from './Lessons.svelte';
	import Hero from './Hero.svelte';
	import ProductFeatures from './ProductFeatures.svelte';
	const title = 'Sourdough & seasonal cookies baked fresh in Helena, MT';
	const body =
		'Picture this: cozy evenings, the scent of freshly baked sourdough filling your home, and the delightful crunch of seasonal cookies with every bite. Make your holiday season extra special with our home-baked products!';
</script>

<svelte:head>
	<title>Grit & Grace Bakery | {title}</title>
	<meta name="description" content={body} />
</svelte:head>

<Hero />
<ProductFeatures />
<Cta />
