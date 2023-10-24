<script lang="ts">
	interface Feature {
		title: string;
		body: string;
	}

	export let features: Feature[] = [];
</script>

<!-- Features section -->
<div id="features" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
			Why Choose CBL?
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
			Cured-In-Place Piping (CIPP) offers several advantages over traditional pipe replacement
			methods, making it a popular choice for pipeline rehabilitation. Here are some of the key
			advantages:
		</p>
	</div>
	<dl
		class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each features as { title, body }}
			<div>
				<dt class="font-semibold text-gray-900 dark:text-gray-100">{title}</dt>
				<dd class="mt-1 text-gray-600 dark:text-gray-300">{body}</dd>
			</div>
		{/each}
	</dl>
</div>
