<script lang="ts">
	import Cta from '$lib/components/cta.svelte';
	import SvelteSeo from 'svelte-seo';
	import { ChevronRight, Shield, Clock, DollarSign, Activity, CheckCircle } from 'lucide-svelte';

	// Add SEO metadata
	const seo = {
		title: 'Manhole Rehabilitation Services | Infrastructure Restoration Experts',
		description:
			'Professional manhole rehabilitation services to extend infrastructure lifespan, reduce costs, and minimize disruption. Complete restoration within 10-12 hours.'
	};

	let activeTab = $state('preparation');

	const processSteps = [
		{
			id: 'preparation',
			title: 'Preparation',
			description:
				'Surface cleaning and preparation using specialized equipment to ensure optimal rehabilitation results.',
			highlights: [
				'Loose and protruding materials are removed from surfaces.',
				'Voids filled and sealed with an advanced, rapid setting mortar mixture.'
			]
		},
		{
			id: 'rehabilitation',
			title: 'Rehabilitation',
			description:
				'Application of high performance, chemical resistant, Calcium Aluminate Cement (CAC).',
			highlights: ['Rapid setting materials.', 'Bench and channels shaped to maximize flows.']
		}
	];

	const benefits = [
		{
			icon: DollarSign,
			title: 'Cost-Effective',
			description: 'Save significantly compared to manhole replacement.'
		},
		{
			icon: Clock,
			title: 'Minimal Disruption',
			description: 'Complete rehabilitation, typically in less than 2 hours.'
		},
		{
			icon: Shield,
			title: 'Long-Term Solution',
			description: 'Highest quality materials applied by experience craftsmen.'
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
						Expert Manhole Rehabilitation
					</h1>
					<p class="mt-6 text-xl text-gray-300 max-w-2xl">
						Professional restoration services that protect and extend the life of your
						infrastructure while minimizing costs and disruption. Often paired with our <a
							href="/services/cipp-pipe-lining"
							class="text-orange-300 hover:text-orange-200 underline">CIPP pipe lining services</a
						>
						for complete system rehabilitation.
					</p>
					<div class="mt-8">
						<a
							href="tel:+16618164291"
							class="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center"
						>
							Request Assessment
							<ChevronRight class="ml-2 w-5 h-5" />
						</a>
					</div>
				</div>
				<div class="mt-12 lg:mt-0">
					<div class="bg-gray-800 rounded-lg p-8">
						<h3 class="text-lg font-semibold mb-4">Why Choose Us</h3>
						<div class="grid gap-4">
							{#each benefits as benefit}
								<div class="flex items-start">
									<div class="flex-shrink-0 mt-1">
										<benefit.icon size={24} />
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
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Our Rehabilitation Process
			</h2>
			<p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
				A systematic approach to infrastructure restoration that ensures quality and longevity
			</p>
		</div>

		<div class="grid lg:grid-cols-3 gap-8">
			<div class="lg:col-span-1">
				<div class="space-y-1">
					{#each processSteps as step}
						<button
							class="w-full text-left px-4 py-3 rounded-lg transition-colors {activeTab === step.id
								? 'bg-orange-50 text-orange-700'
								: 'hover:bg-gray-50'}"
							onclick={() => (activeTab = step.id)}
						>
							<div class="font-medium">{step.title}</div>
						</button>
					{/each}
				</div>
			</div>

			<div class="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
				{#each processSteps as step}
					{#if activeTab === step.id}
						<div>
							<h3 class="text-2xl font-bold mb-4">{step.title}</h3>
							<p class="text-gray-600">{step.description}</p>

							<!-- Highlights Section -->
							<div class="mt-6">
								<h4 class="font-medium text-gray-900 mb-3">Key Highlights:</h4>
								<ul class="space-y-2">
									{#each step.highlights as highlight}
										<li class="flex items-start">
											<CheckCircle class="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
											<span class="text-gray-700">{highlight}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<!-- Related Services Section for Manhole Rehabilitation page -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
		<div class="text-center mb-8">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">Related Services</h2>
			<p class="mt-2 text-lg text-gray-600">
				Complete your infrastructure maintenance with our other specialized services
			</p>
		</div>

		<div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
			<h3 class="text-xl font-semibold mb-2">CIPP Pipe Lining</h3>
			<p class="text-gray-600 mb-4">
				Pair your manhole rehabilitation with our trenchless pipe repair services. Our CIPP
				technology creates a new pipe within your existing infrastructure without disruptive
				excavation.
			</p>
			<a
				href="/services/cipp-pipe-lining"
				class="text-orange-500 hover:text-orange-700 font-medium flex items-center"
			>
				Learn more about our CIPP pipe lining services
				<ChevronRight class="ml-1 w-4 h-4" />
			</a>
		</div>
	</div>

	<Cta />
</div>
