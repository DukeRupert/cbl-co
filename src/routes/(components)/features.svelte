<script lang="ts" context="module">
	export interface Feature {
		title: string;
		body: string;
	}
</script>

<script lang="ts">
	export let eyebrow: string;
	export let title: string;
	export let subtext: string;
	export let features: Feature[] = [];
</script>

<!-- Features section -->
<div id="features" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-base font-semibold leading-7 text-primary">{eyebrow}</h2>
		<p class="mt-2 text-3xl font-bold tracking-tightsm:text-4xl">{title}</p>
		<p class="mt-6 text-lg leading-8 text-muted-foreground">{subtext}</p>
	</div>
	<dl
		class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each features as { title, body }}
			<div>
				<dt class="font-semibold">{title}</dt>
				<dd class="mt-1 text-muted-foreground">{body}</dd>
			</div>
		{/each}
	</dl>
</div>
