<script lang="ts">
	import PaperPlane from 'svelte-radix/PaperPlane.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<!-- CTA -->
<div class="bg-gradient-to-t from-accent mt-32 sm:mt-48">
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Reimagine Your Pipes.<br />Renew Your Infrastructure!
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8">
				Say goodbye to costly excavations and environmental disruptions while ensuring the longevity
				and sustainability of your underground infrastructure. Embrace the future with us, and let's
				get your pipes flowing smoothly again!
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button variant="default" href="tel:+16618164291"
					><PaperPlane class="mr-2 h-4 w-4" />Call</Button
				>
				<Button variant="secondary" href="/what-is-cipp"
					>Learn more <span aria-hidden="true">→</span></Button
				>
			</div>
		</div>
	</div>
</div>
