<script lang="ts">
	export let title = 'Title';
	export let body = 'Body';
	import imgUrl from '$lib/assets/AdobeStock_632539423.jpeg?enhanced';
</script>

<!-- Hero section -->
<div
	class="relative isolate overflow-hidden bg-gradient-to-b from-safetyGreen-500/80 dark:from-tango-500/80 pt-14"
>
	<div
		class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-safetyGreen-500/20 dark:shadow-tango-700/10 ring-1 ring-safetyGreen-200 dark:ring-tango-800 sm:-mr-80 lg:-mr-96"
		aria-hidden="true"
	/>
	<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6"
		>
			<h1
				class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 text-gray-900 dark:text-gray-100"
			>
				{title}
			</h1>
			<div class="mt-6 max-w-xl lg:mt-0">
				<p class="text-lg leading-8 text-gray-600 dark:text-gray-300">{body}</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="tel:+16618164291"
						class="inline-flex items-center gap-x-1.5 rounded-md bg-safetyGreen-500 dark:bg-safetyGreen-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-safetyGreen-400 dark:hover:bg-safetyGreen-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tango-600 dark:focus-visible:outline-safetyGreen-600"
						><svg
							class="-ml-0.5 h-5 w-5"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>Call</a
					>
					<a
						href="/#features"
						class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<enhanced:img
				src={imgUrl}
				alt="A smiling worker wearing a safety vest and construction helmet."
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
				sizes="(min-width:1920px) 580px, (min-width:1080px) 480px, (min-width:768px) 400px"
				loading="eager"
			/>
		</div>
	</div>
	<div
		class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-950 sm:h-32"
	/>
</div>
