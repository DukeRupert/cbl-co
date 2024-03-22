<script lang="ts">
	import { SITE_DATA } from '$lib/global';
	import { CldImage, type CldImageProps } from 'svelte-cloudinary';
	import { Button } from '$lib/components/ui/button/index.js';
	import PaperPlane from 'svelte-radix/PaperPlane.svelte';

	export let title = 'Title';
	export let body = 'Body';
	export let image: CldImageProps;
</script>

<!-- Hero section -->
<div class="relative isolate overflow-hidden pt-14">
	<div
		class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-background shadow-xl shadow-accent ring-1 ring-accent-50 sm:-mr-80 lg:-mr-96"
		aria-hidden="true"
	/>
	<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6"
		>
			<h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2">
				{title}
			</h1>
			<div class="mt-6 max-w-xl lg:mt-0">
				<p class="text-lg leading-8 text-muted-foreground">{body}</p>
				<div class="mt-10 flex items-center gap-x-6">
					<Button variant="default" href={'tel:' + SITE_DATA.phone.tel}>
						<PaperPlane class="mr-2 h-4 w-4" />
						Call
					</Button>
					<Button variant="outline" href="/what-is-cipp"
						>Learn more <span aria-hidden="true">→</span></Button
					>
				</div>
			</div>
			<CldImage
				{...image}
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:mt-36"
				loading="eager"
			/>
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background sm:h-32" />
</div>
