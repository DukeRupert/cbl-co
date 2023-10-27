<script lang="ts">
	import { BUSINESS_NAME, ROOT_URL } from '$lib/stores/company';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import OurMission from '$lib/components/OurMission.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Features from '$lib/components/Features.svelte';
	import LogoCloud from '$lib/components/LogoCloud.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Img from '@zerodevx/svelte-img';
	import CleanPipe from '$lib/assets/AdobeStock_640644502.jpeg?as=run';

	const title = 'Reviving Your Pipes';
	const body =
		"Christian Brother's Lining Co. is your go-to source for Cured-In-Place Piping (CIPP) services, dedicated to rehabilitating aging pipelines for municipalities and cities across the state since 2007. With our eco-friendly, cost-effective, and minimally disruptive approach, we're committed to ensuring California's underground infrastructure remains strong, reliable, and environmentally responsible.";

	const services = [
		{
			title: 'Install CIPP',
			body: 'Our expert team specializes in the installation of Cured-In-Place Piping (CIPP), offering a trenchless solution that rehabilitates pipelines with minimal disruption. This innovative technology extends the life of your pipes, creating a new, corrosion-resistant lining within the existing ones.'
		},
		{
			title: 'Certified Installer for MTC Liner',
			body: 'As a certified installer for <a href="https://www.aegion.com/mtc" class="text-tango-500" target="_blank" rel=noreferrer>MTC Liner</a>, we ensure the highest quality installation of this innovative lining material. The MTC Liner offers enhanced durability and corrosion resistance, extending the lifespan of your pipelines.'
		},
		{
			title: 'CCTV Pipelines of All Sizes',
			body: 'We provide comprehensive Closed-Circuit Television (CCTV) inspection services for pipelines of all sizes. Our state-of-the-art equipment and certified operators ensure thorough inspections, identifying issues and preventing potential problems.'
		},
		{
			title: 'Operators are PACP/NASSCO Certified',
			body: 'Our certified operators adhere to industry standards and best practices. With PACP (Pipeline Assessment and Certification Program) and NASSCO (National Association of Sewer Service Companies) certifications, you can trust in their expertise and professionalism.'
		},
		{
			title: 'Hydro Jet and Remove Roots',
			body: "Say goodbye to clogs and root intrusions with our high-pressure hydro jetting services. We'll efficiently remove blockages and roots, restoring the flow and integrity of your pipelines."
		},
		{
			title: 'Mobile Steam Truck Rental',
			body: "Our mobile steam truck rental service provides a versatile solution for various cleaning and maintenance needs. Whether it's cleaning, degreasing, or other steam-based tasks, our equipment is ready to meet your requirements on the go."
		}
	];

	const advantages = [
		{
			title: 'Trenchless Technology',
			body: 'CIPP eliminates the need for extensive excavation, reducing disruption to the environment and infrastructure.'
		},
		{
			title: 'Cost-Effective',
			body: 'CIPP is more cost-effective than traditional pipe replacement due to reduced labor and equipment requirements.'
		},
		{
			title: 'Faster Repairs',
			body: 'CIPP projects are typically completed more quickly, reducing service disruptions.'
		},
		{
			title: 'Environmental Impact',
			body: 'CIPP has a lower environmental impact, reducing the carbon footprint and waste generation.'
		},
		{
			title: 'Less Disruption to Communities',
			body: 'CIPP reduces disruption, allowing residents and businesses to continue their activities.'
		},
		{
			title: 'Preservation of Landscapes and Infrastructure',
			body: 'CIPP preserves landscapes and infrastructure during pipe rehabilitation.'
		}
	];

	const clients = [
		'City of San Jose',
		'Mill Valley',
		'Napa Sanitation',
		'San Carlos',
		'Millbrae',
		'Burlingame',
		'Morgan Hill',
		'Monterey'
	];

	const seoData = {
		title: `${BUSINESS_NAME} | ${title}`,
		description: body,
		url: ROOT_URL,
		og: {
			src: 'https://www.ebonyandivory.love/images/voice.jpeg',
			alt: 'A hand holding a classic microphone',
			mimeType: 'jpeg',
			width: 1757,
			height: 2635
		}
	};
</script>

<!-- <Seo data={seoData} /> -->
<main class="isolate bg-white dark:bg-gray-950">
	<Hero {title} {body} />
	<Services {services} />
	<OurMission />
	<!-- Image section -->
	<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
		<Img src={CleanPipe} alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
	</div>
	<Features features={advantages} />
	<LogoCloud logos={clients} />
	<Cta />
</main>
