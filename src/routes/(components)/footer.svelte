<script lang="ts">
	import { SITE_DATA } from '../../lib/global';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Phone, Mail, Clock, Shield, Award } from 'lucide-svelte';

	const date = new Date();
</script>

<footer aria-labelledby="footer-heading" class="bg-gray-50 dark:bg-gray-900">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<!-- Company Info Section -->
			<div class="space-y-8">
				<div class="max-w-[200px]">
					<img
						src="https://res.cloudinary.com/rr-wholesale/image/upload/c_fill_pad,w_860,h_330,g_auto/f_auto/q_auto/v1711110608/cbl-co/cbl-header-light_iemzck?_a=BBEAEuXh0"
						alt={SITE_DATA.name + ' logo'}
						class="w-full object-contain"
						width="860"
						height="330"
						sizes={`(min-width: 640px) 20vw, 50vw`}
					/>
				</div>
				<p class="text-sm leading-6 text-gray-600 dark:text-gray-400">
					Dedicated to rehabilitating aging pipelines for municipalities and businesses since 2008.
				</p>

				<!-- Trust Indicators -->
				<div class="space-y-4">
					<div class="flex items-center gap-2">
						<Shield class="w-5 h-5 text-green-600" />
						<span class="text-sm text-gray-600 dark:text-gray-400">Licensed & Insured</span>
					</div>

					<div class="flex items-center gap-2">
						<Award class="w-5 h-5 text-green-600" />
						<span class="text-sm text-gray-600 dark:text-gray-400">Over 15 Years of Excellence</span
						>
					</div>
				</div>
			</div>

			<!-- Navigation & Contact Grid -->
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<!-- Navigation Links -->
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
							Quick Links
						</h3>
						{#if SITE_DATA.routes}
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<Button href="/" variant="link" class="text-sm capitalize">Home</Button>
								</li>
								{#each SITE_DATA.routes as { id, url }}
									<li>
										<Button href={url} variant="link" class="text-sm capitalize">
											{id}
										</Button>
									</li>
								{/each}
							</ul>
						{/if}
					</div>

					<!-- Contact Information -->
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
							Contact Us
						</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<Button
									href={'mailto:' + SITE_DATA.email}
									variant="link"
									class="text-sm flex items-center gap-2 justify-start"
								>
									<Mail class="w-4 h-4" />
									{SITE_DATA.email}
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Section -->
		<div class="mt-16 border-t border-gray-900/10 dark:border-gray-700 pt-8 sm:mt-20 lg:mt-24">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-xs leading-5 text-gray-600 dark:text-gray-400">
					&copy; {date.getFullYear()}
					{SITE_DATA.name}. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
