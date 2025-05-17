<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import SvelteSeo from 'svelte-seo';
	import Cta from '$lib/components/cta.svelte';
	import { ChevronRight, Shield, Clock, DollarSign, Activity, CheckCircle } from 'lucide-svelte';

	let activeStep = 'inspection';

	const seo = {
		title: 'CIPP Pipe Lining Services | Trenchless Pipe Repair Solutions',
		description:
			'Professional Cured-In-Place Pipe (CIPP) lining services. Extend your pipe infrastructure life without excavation using innovative trenchless technology.'
	};

	const benefits = [
		{
			icon: DollarSign,
			title: 'Cost-Effective',
			description: 'Save significantly compared to pipe replacement'
		},
		{
			icon: Clock,
			title: 'Minimal Disruption',
			description: 'No excavation required'
		},
		{
			icon: Shield,
			title: 'Long-Lasting',
			description: 'Corrosion-resistant new pipe within the old'
		},
		{
			icon: Activity,
			title: 'Quality Assured',
			description: 'Rigorous testing and inspection process'
		}
	];

	const processSteps = [
		{
			id: 'inspection',
			title: 'Inspection',
			description:
				'Advanced CCTV inspection identifies pipe defects, assessing damage and determining CIPP suitability.',
			image:
				'https://res.cloudinary.com/rr-wholesale/image/upload/v1711110606/cbl-co/bad_pipe_psqhdn.jpg',
			imageAlt: 'The inside of a degrading infrastructure pipe.'
		},
		{
			id: 'preparation',
			title: 'Preparation & Installation',
			description:
				'Custom resin-impregnated liner fabrication and installation using inversion or pull-in-place methods.',
			image:
				'https://res.cloudinary.com/rr-wholesale/image/upload/v1711110599/cbl-co/48_inch_going_in_w6xk4u.jpg',
			imageAlt:
				"Christian Brother's Lining Company employees preparing the Cured-In-Place-Pipe lining"
		},
		{
			id: 'curing',
			title: 'Curing & Quality Control',
			description:
				'Steam or UV light curing process with continuous monitoring, followed by pressure testing and final inspection.',
			image:
				'https://res.cloudinary.com/rr-wholesale/image/upload/v1711110611/cbl-co/liner_in_mh_o6r9aa.jpg',
			imageAlt: 'A newly renovated pipe after the Cured-In-Place-Pipe has been installed and cured'
		}
	];
</script>

<SvelteSeo {...seo} />

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<div class="relative bg-gray-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
				<div>
					<h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						CIPP Pipe Lining
					</h1>
					<p class="mt-6 text-xl text-gray-300 max-w-2xl">
						Innovative trenchless technology that creates a new, corrosion-resistant pipe within
						your existing infrastructure. No excavation required.
					</p>
					<div class="mt-8">
						<button
							class="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center"
						>
							Request Assessment
							<ChevronRight class="ml-2 w-5 h-5" />
						</button>
					</div>
				</div>
				<div class="mt-12 lg:mt-0">
					<div class="bg-gray-800 rounded-lg p-8">
						<h3 class="text-lg font-semibold mb-4">Why Choose CIPP</h3>
						<div class="grid gap-4">
							{#each benefits as benefit}
								<div class="flex items-start">
									<div class="flex-shrink-0 mt-1">
										<svelte:component this={benefit.icon} size={24} />
									</div>
									<div class="ml-4">
										<h4 class="font-medium">{benefit.title}</h4>
										<p class="text-gray-400 text-sm">{benefit.description}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Process Section -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our CIPP Process</h2>
			<p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
				A systematic approach to pipe rehabilitation that ensures quality and longevity. For
				complementary
				<a
					href="/services/manhole-rehabilitation"
					class="text-orange-500 hover:text-orange-700 font-medium"
					>manhole rehabilitation services</a
				>, we also offer comprehensive solutions to complete your infrastructure maintenance.
			</p>
		</div>

		<div class="grid lg:grid-cols-3 gap-8">
			<div class="lg:col-span-1">
				<div class="space-y-1">
					{#each processSteps as step}
						<button
							class="w-full text-left px-4 py-3 rounded-lg transition-colors {activeStep === step.id
								? 'bg-orange-50 text-orange-700'
								: 'hover:bg-gray-50'}"
							on:click={() => (activeStep = step.id)}
						>
							<div class="font-medium">{step.title}</div>
						</button>
					{/each}
				</div>
			</div>

			<div class="lg:col-span-2">
				{#each processSteps as step}
					{#if activeStep === step.id}
						<div class="bg-gray-50 rounded-2xl p-8">
							<div class="grid md:grid-cols-2 gap-8">
								<div>
									<h3 class="text-2xl font-bold mb-4">{step.title}</h3>
									<p class="text-gray-600 mb-6">{step.description}</p>

									<div class="space-y-4">
										<div class="flex items-start">
											<CheckCircle class="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
											<p class="ml-3 text-sm text-gray-600">
												{#if step.id === 'inspection'}
													Advanced CCTV inspection technology
												{:else if step.id === 'preparation'}
													Custom-fabricated liners for perfect fit
												{:else}
													Continuous quality monitoring
												{/if}
											</p>
										</div>
										<div class="flex items-start">
											<CheckCircle class="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
											<p class="ml-3 text-sm text-gray-600">
												{#if step.id === 'inspection'}
													Comprehensive damage assessment
												{:else if step.id === 'preparation'}
													Styrene-free options available
												{:else}
													Final pressure testing and inspection
												{/if}
											</p>
										</div>
									</div>
								</div>
								<div class="aspect-square overflow-hidden rounded-lg">
									<CldImage
										src={step.image}
										alt={step.imageAlt}
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
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<!-- Related Services Section -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
		<div class="text-center mb-8">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">Related Services</h2>
			<p class="mt-2 text-lg text-gray-600">
				Complete your infrastructure maintenance with our other specialized services
			</p>
		</div>

		<div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
			<h3 class="text-xl font-semibold mb-2">Manhole Rehabilitation</h3>
			<p class="text-gray-600 mb-4">
				Complement your pipe rehabilitation with our expert manhole restoration services. We use
				advanced materials and techniques to extend the life of your entire infrastructure system.
			</p>
			<a
				href="/services/manhole-rehabilitation"
				class="text-orange-500 hover:text-orange-700 font-medium flex items-center"
			>
				Learn more about our manhole rehabilitation services
				<ChevronRight class="ml-1 w-4 h-4" />
			</a>
		</div>
	</div>

	<Cta />
</div>
