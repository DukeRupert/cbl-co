<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { SITE_DATA } from '$lib/global';
	import { Phone, Calendar } from 'lucide-svelte';
</script>

<!-- Enhanced CTA Section with stronger visual appeal and clearer actions -->
<div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
		<div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
			<div>
				<h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
					Ready to <span class="text-accent">renew</span> your infrastructure?
				</h2>
				<p class="mt-4 text-lg text-white/90 max-w-lg">
					Our team is ready to provide a professional assessment and customized rehabilitation plan
					for your aging pipeline infrastructure.
				</p>

				<!-- Trust factors -->
				<div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-semibold">No-Disruption Solutions</h3>
						</div>
					</div>
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-semibold">Free Assessment</h3>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-10 lg:mt-0 lg:ml-auto lg:flex lg:flex-col lg:justify-center">
				<div class="bg-white rounded-lg shadow-xl p-8 max-w-md">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Get Started Today</h3>
					<p class="text-gray-600 mb-6">Schedule a consultation with our infrastructure experts.</p>
					<!-- Secondary CTA Button -->
					<Button
						variant="default"
						href={'mailto:' + SITE_DATA.email}
						class="w-full justify-center bg-orange-600 hover:bg-orange-700 text-white transition-all shadow mb-4"
					>
						<Calendar class="mr-2 h-5 w-5" />
						Schedule an Assessment
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
