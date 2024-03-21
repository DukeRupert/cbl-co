<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import PageHeader from '$lib/components/page-header.svelte';
	import badPipeUrl from '$lib/assets/bad_pipe.jpg?enhanced';
	import goingInUrl from '$lib/assets/48_inch_going_in.jpg?enhanced';
	import curedUrl from '$lib/assets/liner_in_mh.jpg?enhanced';
	import Cta from '$lib/components/cta.svelte';

	const title = 'What is CIPP?';
	const body =
		'This innovative technology extends the life of your pipes, creating a new, corrosion-resistant lining within the existing ones.';
	const page_header = {
		eyebrow: title,
		title: 'Cured-In-Place-Pipe Lining',
		body: body
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
							The Cured-In-Place Pipe (CIPP) process begins by identifying a failing city pipe. This
							pipe may be made of clay, concrete, or PVC, and suffer from cracks, corrosion, leaks,
							or structural damage. Engineers and technicians use advanced inspection methods, like
							CCTV cameras, to assess the damage and determine if CIPP is a suitable repair
							solution. This assessment includes understanding the pipe's size, location, and
							specific problems to guide the CIPP installation process.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg">
							<enhanced:img
								src={badPipeUrl}
								alt="The inside of a degrading infrastructure pipe."
								class="object-cover object-center"
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
							Once the target pipe is identified and assessed, the CIPP liner installation begins:
						</p>
						<ul class="text-muted-foreground">
							<li>
								- Preparation: The damaged pipe is thoroughly cleaned to ensure a smooth surface for
								liner adhesion.
							</li>
							<li>
								- Liner Fabrication: A custom resin-impregnated liner (typically polyester or
								fiberglass) is fabricated to match the pipe's dimensions.
							</li>
							<li>
								- Installation: The liner is inserted into the damaged pipe via existing access
								points and positioned using inversion or winching methods.
							</li>
							<li>
								- Resin Cure: Heat or UV light cures the resin, hardening the liner to create a
								seamless, structurally sound pipe within the old one.
							</li>
						</ul>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
							<enhanced:img
								src={goingInUrl}
								alt="Christian Brother's Lining Company employees preparing the Cured-In-Place-Pipe lining"
								class="object-cover object-center"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
						<h3 class="text-lg font-medium">Curing the Liner</h3>
						<p class="mt-2 text-muted-foreground">
							The final step in the process is curing the liner to ensure it hardens and becomes
							fully functional. This involves controlling temperature and curing time with hot
							water, steam, or UV light, depending on the resin type. During curing, quality control
							inspections guarantee the liner properly adheres to the existing pipe, creating a
							durable and leak-resistant interior. Once cured, the newly installed CIPP undergoes a
							final inspection and pressure test to confirm its integrity and readiness for use.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg">
							<enhanced:img
								src={curedUrl}
								alt="A newly renovated pipe after the Cured-In-Place-Pipe has been installed and cured"
								class="object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Cta />
</PageHeader>

<style>
	ul {
		list-style-type: none; /*Removes bullet points*/
		padding: 0;
		margin: 1em 0; /* Top and bottom margin */
	}

	li {
		margin-bottom: 0.5em; /* Spacing between list items */
	}
</style>
