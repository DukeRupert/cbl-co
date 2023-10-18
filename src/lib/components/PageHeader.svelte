<script lang="ts">
	export let eyebrow = 'Get the help you need';
	export let title = 'Support center';
	export let body =
		'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.';
</script>

<div class="bg-white dark:bg-gray-950 px-6 py-32 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<p class="text-base font-semibold leading-7 text-primary-500">
			{eyebrow}
		</p>
		<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
			{title}
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{body}</p>
	</div>
</div>
