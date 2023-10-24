<script lang="ts">
	export let title = 'Title';
	export let body = 'Body';
</script>

<!-- Hero section -->
<div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20 pt-14">
	<div
		class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-emerald-600/10 dark:shadow-emerald-800/10 ring-1 ring-emerald-50 dark:ring-emerald-900 sm:-mr-80 lg:-mr-96"
		aria-hidden="true"
	/>
	<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
		>
			<h1
				class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:col-span-2 xl:col-auto"
			>
				{title}
			</h1>
			<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
				<p class="text-lg leading-8 text-gray-600 dark:text-gray-300">{body}</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="tel:+16618164291"
						class="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
						>Call us</a
					>
					<a
						href="/#features"
						class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<img
				src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
				alt=""
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
			/>
		</div>
	</div>
	<div
		class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-950 sm:h-32"
	/>
</div>
