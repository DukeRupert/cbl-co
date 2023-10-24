<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import bad_pipe from '$lib/assets/bad_pipe.jpg?as=run';
	import going_in from '$lib/assets/48_inch_going_in.jpg?as=run';
	import cured from '$lib/assets/liner_in_mh.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
	import { page } from '$app/stores';
	import Cta from '$lib/components/Cta.svelte';

	const title = 'What is CIPP?';
	const body =
		'This innovative technology extends the life of your pipes, creating a new, corrosion-resistant lining within the existing ones.';
	const page_header = {
		eyebrow: title,
		title: 'Cured-In-Place-Pipe Lining',
		body: body
	};
</script>

<svelte:head>
	<title>Christian Brother's Lining Co. | {title}</title>
	<meta name="description" content={body} />
</svelte:head>

<PageHeader {...page_header} />
<div class="bg-white dark:bg-gray-950">
	<div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
		<div class="mx-auto max-w-2xl px-4 lg:max-w-none">
			<div class="space-y-16">
				<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
						<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
							Identifying a failing pipe
						</h3>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							The Cured-In-Place Pipe (CIPP) installation process begins with identifying the ideal
							target, which typically involves a failing city pipe. These failing pipes may be made
							of various materials such as clay, concrete, or PVC and could suffer from issues like
							cracks, corrosion, leaks, or structural damage. Engineers and technicians assess the
							extent of the damage using advanced inspection methods, such as CCTV cameras, to
							determine whether CIPP is a suitable solution. This step involves understanding the
							pipe's size, location, and the specific problems it's facing, which will inform the
							subsequent CIPP installation process.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
							<Img
								src={bad_pipe}
								alt="Printed photo of bag being tossed into the sky on top of grass."
								class="object-cover object-center"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
						<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
							Placing the CIPP Liner
						</h3>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							Once the target pipe is identified and assessed, the CIPP liner installation process
							begins. In this step: a. Preparation: The damaged pipe is thoroughly cleaned and
							cleared of debris and obstructions. This ensures a smooth surface for the CIPP liner
							to adhere to. b. Liner Fabrication: A flexible, resin-impregnated liner is
							custom-fabricated based on the pipe's dimensions and the specific requirements of the
							project. This liner typically consists of materials like polyester or fiberglass. c.
							Installation: The liner is inserted into the damaged pipe through existing access
							points, such as manholes or cleanouts. To guide the liner into place, inversion
							methods or winching systems may be used, depending on the pipe's configuration. Once
							positioned correctly, the liner is inflated, pressing against the interior walls of
							the old pipe. d. Resin Cure: Heat or UV light is applied to initiate the curing
							process of the resin-impregnated liner. This causes the liner to harden and form a
							structurally sound, seamless pipe within the old one.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
							<Img
								src={going_in}
								alt="Printed photo of bag being tossed into the sky on top of grass."
								class="object-cover object-center"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
					<div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
						<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Curing the Liner</h3>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							The final step involves the curing of the liner, ensuring it's fully hardened and
							functional: a. Temperature and Time Control: The curing process may vary depending on
							the type of resin used, but it generally involves maintaining a specific temperature
							for a predetermined period. This can be achieved through hot water, steam, or UV
							light, depending on the liner material. b. Quality Control: During the curing process,
							quality control measures are taken to ensure the liner adheres properly to the old
							pipe's interior surface and forms a durable, leak-resistant pipe within. c. Final
							Inspection: Once the curing process is complete, a final inspection is conducted to
							confirm the integrity of the new CIPP and its suitability for use. This often includes
							pressure testing to verify that the rehabilitated pipe can withstand normal operating
							conditions.
						</p>
					</div>
					<div class="flex-auto lg:col-span-7 xl:col-span-8">
						<div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
							<Img
								src={cured}
								alt="Printed photo of bag being tossed into the sky on top of grass."
								class="object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Cta />
</div>
