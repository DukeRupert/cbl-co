<script lang="ts">
	import { SITE_DATA } from '$lib/global';
	import { CldImage, type CldImageProps } from 'svelte-cloudinary';
	import { Button } from '$lib/components/ui/button/index.js';
	import PaperPlane from 'svelte-radix/PaperPlane.svelte';
	import { Phone, ArrowRight } from 'lucide-svelte';

	interface Props {
		title?: string;
		body?: string;
		image: CldImageProps;
	}

	let { title = 'Title', body = 'Body', image }: Props = $props();
</script>

<!-- Enhanced Hero section with stronger visual hierarchy and clearer CTAs -->
<div class="relative isolate overflow-hidden bg-gradient-to-b from-gray-100 to-accent pt-14">
	<div
		class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-background shadow-xl shadow-accent/10 ring-1 ring-accent-50 sm:-mr-80 lg:-mr-96"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 items-center"
		>
			<div class="lg:col-span-1">
				<h1
					class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
				>
					{title}
				</h1>
				<div class="mt-6 max-w-xl">
					<p class="text-lg leading-8 text-gray-600">{body}</p>

					<!-- Primary and Secondary CTAs with clear visual hierarchy -->
					<div class="mt-10 flex flex-col sm:flex-row gap-4">
						<Button
							variant="default"
							href={'tel:' + SITE_DATA.phone.tel}
							class="w-full sm:w-auto justify-center text-base bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
						>
							<Phone class="mr-2 h-5 w-5" />
							Call
						</Button>

						<Button
							variant="outline"
							href="/services/cipp-pipe-lining"
							class="w-full sm:w-auto justify-center text-base border-orange-200 text-orange-700 hover:bg-orange-50"
						>
							Learn About Our Services
							<ArrowRight class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>

			<!-- Enhanced image with better visibility -->
			<div class="lg:col-span-1 mt-12 lg:mt-0">
				<div class="relative">
					<CldImage
						{...image}
						class="w-full rounded-xl shadow-2xl object-cover lg:max-w-none"
						loading="eager"
					/>
					<div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
				</div>
			</div>
		</div>
	</div>

	<!-- Visual end marker for the hero section -->
	<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
</div>
