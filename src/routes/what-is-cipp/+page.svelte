<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import SvelteSeo from 'svelte-seo';
	import PageHeader from '$lib/components/page-header.svelte';
	import Cta from '$lib/components/cta.svelte';

	const page_header = {
		eyebrow: 'What is CIPP?',
		title: 'Cured-In-Place-Pipe Lining',
		body: 'This innovative technology extends the life of your pipes, creating a new, corrosion-resistant lining within the existing ones.'
	};

	const seo = {
		title: 'What is CIPP? Trenchless Pipe Repair Explained',
		description:
			'Learn how CIPP (Cured-In-Place Pipe) technology fixes failing pipes without digging. Understand the process, benefits, and applications.'
	};
</script>

<SvelteSeo {...seo} />

<PageHeader {...page_header}>
	<div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
		<div class="mx-auto max-w-2xl px-4 lg:max-w-none">
			<div class="space-y-16">
				<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
						<h3 class="text-lg font-medium">Identifying a failing pipe</h3>
						<p class="mt-2 text-muted-foreground">
							The Cured-In-Place Pipe (CIPP) process begins by identifying a failing pipe. This pipe
							may be made of clay, concrete, PVC, etc. and suffer from a variety of defects
							including cracks, corrosion, leaks, or structural damage. Technicians use advanced
							inspection methods, like CCTV cameras, to assess the damage and determine if CIPP is a
							suitable repair solution. This assessment includes understanding the pipe's size,
							location, and specific problems to guide the CIPP installation process.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg">
							<CldImage
								src="https://res.cloudinary.com/rr-wholesale/image/upload/v1711110606/cbl-co/bad_pipe_psqhdn.jpg"
								alt="The inside of a degrading infrastructure pipe."
								class="object-cover object-center"
								width="3024"
								height="4032"
								sizes={`(min-width: 1024px) 50vw,
										(min-width: 640px) 90vw,
										100vw`}
							/>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col-reverse prose dark:invert-prose lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
				>
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4 lg:order-last">
						<h3 class="text-lg font-medium">Placing the CIPP Liner</h3>
						<p class="mt-2 text-muted-foreground">
							Once the target pipe is identified and assessed, the process begins:
						</p>
						<ul class="py-4 text-muted-foreground">
							<li class="mb-2">
								- Preparation: The damaged pipe is thoroughly cleaned to prepare the surface for
								liner adhesion by high-velocity water jet cleaners.
							</li>
							<li class="mb-2">
								- Liner Fabrication: A custom resin-impregnated liner is fabricated to match the
								pipe's dimensions and structural requirements. *Styrene free options available
							</li>
							<li class="mb-2">
								- Installation: The liner is inserted into the damaged pipe via existing access
								points and positioned using inversion or pull-in-place methods.
							</li>
						</ul>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg">
							<CldImage
								src="https://res.cloudinary.com/rr-wholesale/image/upload/v1711110599/cbl-co/48_inch_going_in_w6xk4u.jpg"
								alt="Christian Brother's Lining Company employees preparing the Cured-In-Place-Pipe lining"
								class="object-cover object-center"
								width="1512"
								height="2016"
								sizes={`(min-width: 1024px) 50vw,
										(min-width: 640px) 90vw,
										100vw`}
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
						<h3 class="text-lg font-medium">Curing the Liner</h3>
						<p class="mt-2 text-muted-foreground">
							The final step in the process is curing the liner. This involves raising the
							temperature with steam, or curing via UV light, depending on the resin type. During
							curing, quality control inspections guarantee that temperatures are maintained, and
							that the liner properly adheres to the existing pipe, creating a durable interior.
							Once cured, the newly installed CIPP undergoes pressure testing, lateral connections
							are reestablished, and a final inspection ensures readiness for use.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg">
							<CldImage
								src="https://res.cloudinary.com/rr-wholesale/image/upload/v1711110611/cbl-co/liner_in_mh_o6r9aa.jpg"
								alt="A newly renovated pipe after the Cured-In-Place-Pipe has been installed and cured"
								class="object-cover object-center"
								width="3024"
								height="4032"
								sizes={`(min-width: 1024px) 50vw,
										(min-width: 640px) 90vw,
										100vw`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</PageHeader>
<Cta />
