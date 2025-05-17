<script lang="ts">
	import { CldImage, type CldImageProps } from 'svelte-cloudinary';
	import SvelteSeo from 'svelte-seo';
	import Hero from './(components)/hero.svelte';
	import Services from './(components)/services.svelte';
	import Mission from './(components)/mission.svelte';
	import Features from './(components)/features.svelte';
	import LogoCloud from './(components)/logo-cloud.svelte';
	import Cta from '$lib/components/cta.svelte';
	import { ChevronRight } from 'lucide-svelte';

	const hero = {
		title: "Pipeline Problems? We've Got the Solution.",
		body: 'Cured-In-Place Pipe (CIPP) lining for cost-effective, trenchless, and eco-friendly pipe rehabilitation. Serving California since 2008.',
		image: {
			src: 'https://res.cloudinary.com/rr-wholesale/image/upload/v1747515588/cbl-co/repaired_pipe_an9eij.jpg',
			alt: 'The view from inside an infrastructure pipe looking out on a construction site.',
			width: '1000',
			height: '667',
			sizes: `(min-width: 1024px) 50vw,
				(min-width: 640px) 90vw,
				100vw`
		}
	};

	const clients = [
		'San Jose',
		'San Francisco',
		'Oakland',
		'Berkeley',
		'Concord',
		'San Mateo',
		'Monterey',
		'Napa'
	];

	const features = {
		eyebrow: 'The CIPP Advantage',
		title: 'Why Choose Us?',
		subtext:
			'Discover the smarter, more efficient, and more sustainable way to fix aging pipelines.',
		features: [
			{
				title: 'Minimize Disruption',
				body: "Forget disruptive excavations. CIPP fixes pipes from the inside out, preserving roads, landscapes, and your community's flow."
			},
			{
				title: 'Cost-Effective Repairs',
				body: 'CIPP slashes labor and equipment costs compared to traditional open trench pipe. Get back to business faster with money to spare.'
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
			'We keep your infrastructure flowing by providing cost-effective and efficient solutions for pipeline rehabilitation.',
		services: [
			{
				title: 'Trenchless Pipe Repair',
				body: 'Our <a href="/services/cipp-pipe-lining" class="text-orange-500 hover:text-orange-700 font-medium">CIPP experts</a> seamlessly create a new, corrosion-resistant pipe inside your old one – extending its lifespan, saving you money, and minimizing community disruption.'
			},
			{
				title: 'MTC Liner Experts',
				body: "We're certified Manufactured Technologies Corporation (MTC) Liner installers, providing a superior solution for durable, corrosion-resistant pipe rehabilitation. Rest assured your pipelines are in the best hands."
			},
			{
				title: 'Manhole Rehabilitation',
				body: "Don't wait for small issues to become big problems. We offer comprehensive <a href='/services/manhole-rehabilitation' class='text-orange-500 hover:text-orange-700 font-medium'>manhole rehabilitation solutions</a> for repairing and upgrading manhole structures"
			},
			{
				title: 'Powerful Hydro Jetting',
				body: "Stubborn clogs and roots are no match for our hydro jetting. We'll clear blockages fast, restoring your pipelines to peak efficiency."
			},
			{
				title: 'Certified Technicians',
				body: 'Our commitment to top standards is clear – our operators hold PACP/NASSCO certifications, ensuring your pipelines receive expert care.'
			}
		]
	};

	const mission = {
		title: "Our Mission: Glorifying God First & Restoring California's Lifelines",
		subtext: [
			"At Christian Brother's Lining Co, we are proud to be frontrunners in Cured-In-Place Piping (CIPP) and Manhole Rehabilitation services, offering a lifeline to municipalities and businesses across the Golden State. With a strong commitment to excellence and a passion for ensuring the longevity of California's vital underground infrastructure, we've dedicated ourselves to providing a cost-effective and sustainable alternative to traditional pipe replacement.",
			'Our team of pipeline heroes uses cutting-edge CIPP technology to fix aging or damaged pipes from the inside out. This means fewer disruptions, lower costs, and a healthier environment.',
			"We're committed to being your partner in keeping California's underground infrastructure flowing. Let's work together to build a stronger, more sustainable future – one pipeline at a time."
		],
		impacts: [
			{ value: '250,000+', impact: 'Linear Feet of Pipelines Restored' },
			{ value: '300+', impact: 'Successful Projects' }
		]
	};

	const image: CldImageProps = {
		src: 'https://res.cloudinary.com/rr-wholesale/image/upload/v1711110608/cbl-co/AdobeStock_640644502_hjitkv.jpg',
		alt: 'Clean water flowing out of a restored pipe into a canal.',
		width: '6144',
		height: '3072',
		sizes: `(min-width: 1024px) 70vw,
				100vw`
	};

	const seo = {
		title: "CIPP Pipe Repair California | Trenchless Solutions | Christian Brother's Lining",
		description:
			'Specializing in CIPP (Cured-In-Place-Pipe) for California municipalities. Minimize disruption, restore infrastructure.'
	};
</script>

<SvelteSeo {...seo} />

<!-- Main Hero Section -->
<Hero {...hero} />

<!-- Trust Indicators Section -->
<div class="py-10">
	<LogoCloud {clients} />
</div>

<!-- Services Overview - Primary Value Proposition -->
<div class="relative overflow-hidden py-12">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<Services {...services} />

		<!-- Strong CTA After Services -->
		<div class="mt-12 text-center">
			<a
				href="/services/cipp-pipe-lining"
				class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
			>
				Explore Our CIPP Services
				<ChevronRight class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
			</a>
		</div>
	</div>
</div>

<!-- Features Section - Why Choose Us -->
<div class="bg-white">
	<Features {...features} />

	<!-- Secondary CTA -->
	<div class="text-center mb-16">
		<a
			href="/services/manhole-rehabilitation"
			class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
		>
			Learn About Manhole Rehabilitation
			<ChevronRight class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
		</a>
	</div>
</div>

<!-- Visual Divider - Full Width Image -->
<div class="bg-gray-800 py-2">
	<div class="mt-12 sm:mt-16 xl:mx-auto xl:max-w-7xl xl:px-8">
		<CldImage {...image} class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
	</div>
</div>

<!-- Mission and Impact - About Us -->
<div class="bg-white">
	<Mission {...mission} />
</div>

<!-- Final Strong CTA -->
<Cta />
