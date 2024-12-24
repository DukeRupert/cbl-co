<script lang="ts">
	interface Props {
		eyebrow?: string;
		title?: string;
		body?: string;
		children?: import('svelte').Snippet;
	}

	let {
		eyebrow = 'Get the help you need',
		title = 'Support center',
		body = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
		children
	}: Props = $props();
</script>

<div class="px-6 py-32 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<p class="text-base font-semibold leading-7 text-tango-500">
			{eyebrow}
		</p>
		<h2 class="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
			{title}
		</h2>
		<p class="mt-6 text-lg leading-8 text-muted-foreground">{body}</p>
	</div>
	{@render children?.()}
</div>
