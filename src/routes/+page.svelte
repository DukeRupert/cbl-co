<script lang="ts">
	import { SITE_DATA } from '$lib/global';
	import { page } from '$app/stores';
	import SvelteSeo from 'svelte-seo';
	import Hero from './(components)/hero.svelte';
	import Services from './(components)/services.svelte';
	import Mission from './(components)/mission.svelte';
	import Features from './(components)/features.svelte';
	import LogoCloud from './(components)/logo-cloud.svelte';
	import Cta from '$lib/components/cta.svelte';
	import imgUrl from '$lib/assets/AdobeStock_640644502.jpeg?enhanced';

	const hero = {
		title: "Pipeline Problems? We've Got the Solution.",
		body: 'Cured-In-Place Pipe (CIPP) lining for cost-effective, trenchless, and eco-friendly pipe rehabilitation. Serving California since 2007.'
	};

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

	const features = {
		eyebrow: 'The CIPP Advantage',
		title: 'Why Municipalities Choose Us',
		subtext:
			'Discover the smarter, more efficient, and more sustainable way to fix aging pipelines.',
		features: [
			{
				title: 'Minimize Disruption',
				body: "Forget disruptive excavations. CIPP fixes pipes from the inside out, preserving roads, landscapes, and your community's flow."
			},
			{
				title: 'Cost-Effective Repairs',
				body: 'CIPP slashes labor and equipment costs compared to old-school pipe replacement. Get back to business faster with money to spare.'
			},
			{
				title: 'The Eco-Friendly Fix',
				body: 'CIPP means less waste, lower emissions, and a healthier environment. Choose the sustainable solution for pipeline repairs.'
			},
			{
				title: 'Less Downtime for Communities',
				body: 'CIPP projects get done faster, minimizing disruptions to traffic, businesses, and everyday life.'
			},
			{
				title: 'Infrastructure Preservation',
				body: 'CIPP extends the life of your pipelines without tearing up roads, sidewalks, and landscapes.'
			}
		]
	};

	const services = {
		eyebrow: 'Our Services',
		title: 'Your Partner in Infrastructure Renewal',
		subtext:
			"We provide cost-effective, efficient, and minimally disruptive solutions for municipal pipelines.  Discover how we keep your city's infrastructure flowing.",
		services: [
			{
				title: 'Trenchless Pipe Repair',
				body: 'Our CIPP experts seamlessly create a new, corrosion-resistant pipe inside your old one – extending its lifespan, saving you money, and minimizing community disruption.'
			},
			{
				title: 'MTC Liner Experts',
				body: "We're experts in MTC Liner, a superior solution for durable, corrosion-resistant pipe rehabilitation. Rest assured your pipelines are in the best hands."
			},
			{
				title: 'Precision Pipeline Inspections',
				body: 'We pinpoint pipeline problems with precision using advanced CCTV technology. Our detailed inspections guide accurate repairs, preventing costly surprises.'
			},
			{
				title: 'Certified Technicians',
				body: 'Our commitment to top standards is clear – our operators hold PACP/NASSCO certifications, ensuring your pipelines receive expert care.'
			},
			{
				title: 'Powerful Hydro Jetting',
				body: "Stubborn clogs and roots are no match for our hydro jetting. We'll clear blockages fast, restoring your pipelines to peak efficiency."
			},
			{
				title: 'Mobile Steam Cleaning',
				body: 'Tackle tough cleaning jobs anywhere with our versatile steam truck. Ideal for deep cleaning, degreasing, and more.'
			}
		]
	};

	const mission = {
		title: "Our Mission: Restoring California's Lifelines, Sustainably",
		subtext: [
			"We're Christian Brother's Lining Co., your CIPP experts dedicated to keeping California's communities strong. We believe in smart, eco-conscious solutions that protect our environment and strengthen our infrastructure.",
			'Our team of pipeline heroes uses cutting-edge CIPP technology to fix aging or damaged pipes from the inside out.  This means fewer disruptions, lower costs, and a healthier environment.',
			"We're committed to being your partner in keeping California's underground infrastructure flowing. Let's work together to build a stronger, more sustainable future – one pipeline at a time."
		],
		impacts: [
			{ value: '380,000+', impact: 'Linear Feet of Pipelines Restored' },
			{ value: '400+', impact: 'Successful Projects' },
			{ value: '0', impact: 'Sea Lions Displaced' }
		]
	};

	const seo = {
		title: SITE_DATA.name,
		description: hero.body,
		url: SITE_DATA.url,
		og: {
			src: `${$page.url.origin}/logo/cbl-header-light.png`,
			alt: `${SITE_DATA.name} logo`,
			mimeType: 'jpeg',
			width: 860,
			height: 330
		}
	};
</script>

<SvelteSeo {...seo} />

<Hero {...hero} />
<LogoCloud {clients} />
<Features {...features} />
<Services {...services} />
<!-- Image section -->
<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
	<enhanced:img
		src={imgUrl}
		alt=""
		class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
		sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
	/>
</div>
<Mission {...mission} />
<Cta />
